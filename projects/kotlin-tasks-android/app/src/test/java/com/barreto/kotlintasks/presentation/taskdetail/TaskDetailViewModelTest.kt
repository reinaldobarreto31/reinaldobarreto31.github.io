package com.barreto.kotlintasks.presentation.taskdetail

import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import androidx.work.WorkManager
import io.mockk.coEvery
import io.mockk.coVerify
import io.mockk.mockk
import io.mockk.verify
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.test.UnconfinedTestDispatcher
import kotlinx.coroutines.test.resetMain
import kotlinx.coroutines.test.runTest
import kotlinx.coroutines.test.setMain
import org.junit.After
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test

@OptIn(ExperimentalCoroutinesApi::class)
class TaskDetailViewModelTest {

    private val repository: ITaskRepository = mockk(relaxed = true)
    private val workManager: WorkManager = mockk(relaxed = true)
    private lateinit var viewModel: TaskDetailViewModel
    private val testDispatcher = UnconfinedTestDispatcher()

    @Before
    fun setUp() {
        Dispatchers.setMain(testDispatcher)
        viewModel = TaskDetailViewModel(repository, workManager)
    }

    @After
    fun tearDown() {
        Dispatchers.resetMain()
    }

    // ── Blank-title validation ──────────────────────────────────────────────

    @Test
    fun `saveTask with blank title emits Error state`() {
        viewModel.saveTask(-1L, "   ", "", Priority.MEDIUM, null)

        val state = viewModel.uiState.value
        assertTrue("Expected Error state, got $state", state is DetailUiState.Error)
        assertEquals(
            "O título não pode estar vazio",
            (state as DetailUiState.Error).message
        )
    }

    @Test
    fun `saveTask with empty title emits Error state`() {
        viewModel.saveTask(-1L, "", "Some description", Priority.LOW, null)

        val state = viewModel.uiState.value
        assertTrue("Expected Error state, got $state", state is DetailUiState.Error)
    }

    @Test
    fun `saveTask with blank title does NOT call repository`() {
        viewModel.saveTask(-1L, "   ", "", Priority.MEDIUM, null)

        coVerify(exactly = 0) { repository.addTask(any()) }
        coVerify(exactly = 0) { repository.updateTask(any()) }
    }

    // ── loadTask ────────────────────────────────────────────────────────────

    @Test
    fun `loadTask emits Loaded state when task exists`() = runTest {
        val task = Task(id = 1L, title = "Buy milk", priority = Priority.HIGH)
        coEvery { repository.getTaskById(1L) } returns task

        viewModel.loadTask(1L)

        val state = viewModel.uiState.value
        assertTrue("Expected Loaded state, got $state", state is DetailUiState.Loaded)
        assertEquals(task, (state as DetailUiState.Loaded).task)
    }

    @Test
    fun `loadTask emits Error state when task does not exist`() = runTest {
        coEvery { repository.getTaskById(99L) } returns null

        viewModel.loadTask(99L)

        val state = viewModel.uiState.value
        assertTrue("Expected Error state, got $state", state is DetailUiState.Error)
        assertEquals("Tarefa não encontrada", (state as DetailUiState.Error).message)
    }

    // ── saveTask — create ───────────────────────────────────────────────────

    @Test
    fun `saveTask with new task calls addTask with correct fields`() = runTest {
        coEvery { repository.addTask(any()) } returns 1L

        viewModel.saveTask(-1L, "New Task", "A description", Priority.HIGH, null)

        coVerify {
            repository.addTask(
                match { it.title == "New Task" && it.priority == Priority.HIGH && it.description == "A description" }
            )
        }
    }

    @Test
    fun `saveTask with new task trims whitespace from title`() = runTest {
        coEvery { repository.addTask(any()) } returns 1L

        viewModel.saveTask(-1L, "  Spaced Title  ", "", Priority.MEDIUM, null)

        coVerify { repository.addTask(match { it.title == "Spaced Title" }) }
    }

    @Test
    fun `saveTask with new task emits Saved state`() = runTest {
        coEvery { repository.addTask(any()) } returns 1L

        viewModel.saveTask(-1L, "My Task", "", Priority.MEDIUM, null)

        assertEquals(DetailUiState.Saved, viewModel.uiState.value)
    }

    // ── saveTask — update ───────────────────────────────────────────────────

    @Test
    fun `saveTask with existing id calls updateTask`() = runTest {
        val existing = Task(id = 5L, title = "Old Title", priority = Priority.LOW)
        coEvery { repository.getTaskById(5L) } returns existing

        viewModel.saveTask(5L, "Updated Title", "New desc", Priority.HIGH, null)

        coVerify {
            repository.updateTask(
                match { it.id == 5L && it.title == "Updated Title" && it.priority == Priority.HIGH }
            )
        }
    }

    @Test
    fun `saveTask with existing id emits Saved state`() = runTest {
        val existing = Task(id = 5L, title = "Old Title")
        coEvery { repository.getTaskById(5L) } returns existing

        viewModel.saveTask(5L, "Updated Title", "", Priority.MEDIUM, null)

        assertEquals(DetailUiState.Saved, viewModel.uiState.value)
    }

    @Test
    fun `saveTask with existing id does NOT call addTask`() = runTest {
        val existing = Task(id = 5L, title = "Old Title")
        coEvery { repository.getTaskById(5L) } returns existing

        viewModel.saveTask(5L, "Updated Title", "", Priority.MEDIUM, null)

        coVerify(exactly = 0) { repository.addTask(any()) }
    }

    // ── Reminder scheduling ─────────────────────────────────────────────────

    @Test
    fun `saveTask with null due date cancels any existing reminder but does not enqueue`() = runTest {
        coEvery { repository.addTask(any()) } returns 1L

        viewModel.saveTask(-1L, "No Due Date Task", "", Priority.MEDIUM, null)

        // cancelAllWorkByTag should be called for the old reminder, but enqueue should not be
        verify(exactly = 1) { workManager.cancelAllWorkByTag(any()) }
        verify(exactly = 0) { workManager.enqueue(any<androidx.work.WorkRequest>()) }
    }
}
