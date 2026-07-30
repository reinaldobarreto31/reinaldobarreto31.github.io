package com.barreto.kotlintasks.data.repository

import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.data.local.TaskDao
import com.barreto.kotlintasks.data.local.TaskEntity
import com.barreto.kotlintasks.domain.model.Task
import io.mockk.coEvery
import io.mockk.coVerify
import io.mockk.mockk
import io.mockk.slot
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.test.runTest
import org.junit.Assert.*
import org.junit.Before
import org.junit.Test

class TaskRepositoryTest {

    private lateinit var dao: TaskDao
    private lateinit var repository: TaskRepository

    @Before
    fun setup() {
        dao = mockk(relaxed = true)
        repository = TaskRepository(dao)
    }

    @Test
    fun `getAllTasks maps entities to domain models correctly`() = runTest {
        val entity = TaskEntity(
            id = 1L,
            title = "Test Task",
            description = "Desc",
            priority = Priority.HIGH.ordinal,
            isCompleted = false,
        )
        coEvery { dao.getAllTasks() } returns flowOf(listOf(entity))

        val tasks = repository.getAllTasks().first()

        assertEquals(1, tasks.size)
        assertEquals("Test Task", tasks[0].title)
        assertEquals(Priority.HIGH, tasks[0].priority)
        assertFalse(tasks[0].isCompleted)
    }

    @Test
    fun `addTask inserts entity and returns generated id`() = runTest {
        val slot = slot<TaskEntity>()
        coEvery { dao.insertTask(capture(slot)) } returns 42L

        val id = repository.addTask(Task(title = "New Task", priority = Priority.MEDIUM))

        assertEquals(42L, id)
        assertEquals("New Task", slot.captured.title)
    }

    @Test
    fun `setTaskCompleted delegates to dao`() = runTest {
        repository.setTaskCompleted(1L, true)
        coVerify { dao.setTaskCompleted(1L, true, any()) }
    }
}
