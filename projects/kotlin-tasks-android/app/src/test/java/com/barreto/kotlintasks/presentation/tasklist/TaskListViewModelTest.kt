package com.barreto.kotlintasks.presentation.tasklist

import androidx.work.WorkManager
import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import com.barreto.kotlintasks.notification.TaskReminderWorker
import io.mockk.coEvery
import io.mockk.coVerify
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.test.UnconfinedTestDispatcher
import kotlinx.coroutines.test.advanceUntilIdle
import kotlinx.coroutines.test.resetMain
import kotlinx.coroutines.test.runTest
import kotlinx.coroutines.test.setMain
import org.junit.After
import org.junit.Assert.assertEquals
import org.junit.Before
import org.junit.Test

@OptIn(ExperimentalCoroutinesApi::class)
class TaskListViewModelTest {

    private val repository: ITaskRepository = mockk(relaxed = true)
    private val workManager: WorkManager = mockk(relaxed = true)
    private lateinit var viewModel: TaskListViewModel
    private val testDispatcher = UnconfinedTestDispatcher()

    @Before
    fun setUp() {
        Dispatchers.setMain(testDispatcher)
        // Provide default empty flows for all repository accessors so
        // the StateFlow inside the ViewModel starts up cleanly.
        every { repository.getAllTasks() } returns flowOf(emptyList())
        every { repository.getPendingTasks() } returns flowOf(emptyList())
        every { repository.getCompletedTasks() } returns flowOf(emptyList())
        every { repository.searchTasks(any()) } returns flowOf(emptyList())
        viewModel = TaskListViewModel(repository, workManager)
    }

    @After
    fun tearDown() {
        Dispatchers.resetMain()
    }

    // ── Initial state ───────────────────────────────────────────────────────

    @Test
    fun `initial filter is ALL`() {
        assertEquals(TaskFilter.ALL, viewModel.filter.value)
    }

    @Test
    fun `initial tasks list is empty`() = runTest {
        // Collector needed to activate SharingStarted.WhileSubscribed
        val collected = mutableListOf<List<Task>>()
        val job = backgroundScope.launch(testDispatcher) { viewModel.tasks.collect { collected += it } }
        advanceUntilIdle()

        assertEquals(1, collected.size)
        assertEquals(emptyList<Task>(), collected.first())
        job.cancel()
    }

    // ── Filter state ────────────────────────────────────────────────────────

    @Test
    fun `onFilterChanged updates filter to PENDING`() {
        viewModel.onFilterChanged(TaskFilter.PENDING)
        assertEquals(TaskFilter.PENDING, viewModel.filter.value)
    }

    @Test
    fun `onFilterChanged updates filter to COMPLETED`() {
        viewModel.onFilterChanged(TaskFilter.COMPLETED)
        assertEquals(TaskFilter.COMPLETED, viewModel.filter.value)
    }

    @Test
    fun `onFilterChanged back to ALL updates filter`() {
        viewModel.onFilterChanged(TaskFilter.PENDING)
        viewModel.onFilterChanged(TaskFilter.ALL)
        assertEquals(TaskFilter.ALL, viewModel.filter.value)
    }

    @Test
    fun `filter PENDING uses getPendingTasks`() = runTest {
        val pending = listOf(Task(id = 1L, title = "Pending Task"))
        every { repository.getPendingTasks() } returns flowOf(pending)

        // Activate the shared flow by collecting it
        val job = backgroundScope.launch(testDispatcher) { viewModel.tasks.collect {} }
        viewModel.onFilterChanged(TaskFilter.PENDING)
        advanceUntilIdle()

        verify { repository.getPendingTasks() }
        job.cancel()
    }

    @Test
    fun `filter COMPLETED uses getCompletedTasks`() = runTest {
        val completed = listOf(Task(id = 2L, title = "Done", isCompleted = true))
        every { repository.getCompletedTasks() } returns flowOf(completed)

        val job = backgroundScope.launch(testDispatcher) { viewModel.tasks.collect {} }
        viewModel.onFilterChanged(TaskFilter.COMPLETED)
        advanceUntilIdle()

        verify { repository.getCompletedTasks() }
        job.cancel()
    }

    @Test
    fun `filter ALL uses getAllTasks`() = runTest {
        val all = listOf(
            Task(id = 1L, title = "Task A"),
            Task(id = 2L, title = "Task B", isCompleted = true),
        )
        every { repository.getAllTasks() } returns flowOf(all)

        val job = backgroundScope.launch(testDispatcher) { viewModel.tasks.collect {} }
        viewModel.onFilterChanged(TaskFilter.ALL)
        advanceUntilIdle()

        verify { repository.getAllTasks() }
        job.cancel()
    }

    // ── Search state ────────────────────────────────────────────────────────

    @Test
    fun `non-blank search query uses searchTasks`() = runTest {
        val results = listOf(Task(id = 3L, title = "Buy groceries"))
        every { repository.searchTasks("buy") } returns flowOf(results)

        val job = backgroundScope.launch(testDispatcher) { viewModel.tasks.collect {} }
        viewModel.onSearchQueryChanged("buy")
        advanceUntilIdle()

        verify { repository.searchTasks("buy") }
        job.cancel()
    }

    @Test
    fun `blank search query falls back to active filter source`() = runTest {
        val job = backgroundScope.launch(testDispatcher) { viewModel.tasks.collect {} }

        // Set a query then clear it
        viewModel.onSearchQueryChanged("something")
        viewModel.onSearchQueryChanged("")
        advanceUntilIdle()

        // With blank query and ALL filter, getAllTasks should be the active source
        verify { repository.getAllTasks() }
        job.cancel()
    }

    // ── toggleTaskCompleted ─────────────────────────────────────────────────

    @Test
    fun `toggleTaskCompleted marks incomplete task as complete`() = runTest {
        val task = Task(id = 10L, title = "Write tests", isCompleted = false)

        viewModel.toggleTaskCompleted(task)
        advanceUntilIdle()

        coVerify { repository.setTaskCompleted(10L, true) }
    }

    @Test
    fun `toggleTaskCompleted marks completed task as incomplete`() = runTest {
        val task = Task(id = 10L, title = "Write tests", isCompleted = true)

        viewModel.toggleTaskCompleted(task)
        advanceUntilIdle()

        coVerify { repository.setTaskCompleted(10L, false) }
    }

    @Test
    fun `toggleTaskCompleted cancels WorkManager reminder when task is marked complete`() = runTest {
        val task = Task(id = 10L, title = "Write tests", isCompleted = false)

        viewModel.toggleTaskCompleted(task)
        advanceUntilIdle()

        verify { workManager.cancelAllWorkByTag(TaskReminderWorker.workTagFor(10L)) }
    }

    @Test
    fun `toggleTaskCompleted does NOT cancel reminder when task is un-completed`() = runTest {
        val task = Task(id = 10L, title = "Write tests", isCompleted = true)

        viewModel.toggleTaskCompleted(task)
        advanceUntilIdle()

        verify(exactly = 0) { workManager.cancelAllWorkByTag(any()) }
    }

    // ── deleteTask ──────────────────────────────────────────────────────────

    @Test
    fun `deleteTask calls repository deleteTask`() = runTest {
        val task = Task(id = 7L, title = "Task to delete")

        viewModel.deleteTask(task)
        advanceUntilIdle()

        coVerify { repository.deleteTask(task) }
    }

    @Test
    fun `deleteTask cancels WorkManager reminder`() = runTest {
        val task = Task(id = 7L, title = "Task to delete")

        viewModel.deleteTask(task)
        advanceUntilIdle()

        verify { workManager.cancelAllWorkByTag(TaskReminderWorker.workTagFor(7L)) }
    }

    // ── undoDelete ──────────────────────────────────────────────────────────

    @Test
    fun `undoDelete calls addTask with the original task`() = runTest {
        val task = Task(id = 7L, title = "Restored task", priority = Priority.HIGH)
        coEvery { repository.addTask(any()) } returns 7L

        viewModel.undoDelete(task)
        advanceUntilIdle()

        coVerify { repository.addTask(task) }
    }

    // ── deleteAllCompleted ──────────────────────────────────────────────────

    @Test
    fun `deleteAllCompleted delegates to repository`() = runTest {
        viewModel.deleteAllCompleted()
        advanceUntilIdle()

        coVerify { repository.deleteAllCompleted() }
    }
}
