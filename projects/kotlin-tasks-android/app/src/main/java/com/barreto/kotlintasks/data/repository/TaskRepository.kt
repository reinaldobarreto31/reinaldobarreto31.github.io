package com.barreto.kotlintasks.data.repository

import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.data.local.TaskDao
import com.barreto.kotlintasks.data.local.TaskEntity
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class TaskRepository @Inject constructor(
    private val dao: TaskDao,
) : ITaskRepository {

    override fun getAllTasks(): Flow<List<Task>> =
        dao.getAllTasks().map { list -> list.map(::toModel) }

    override fun getPendingTasks(): Flow<List<Task>> =
        dao.getPendingTasks().map { list -> list.map(::toModel) }

    override fun getCompletedTasks(): Flow<List<Task>> =
        dao.getCompletedTasks().map { list -> list.map(::toModel) }

    override fun searchTasks(query: String): Flow<List<Task>> =
        dao.searchTasks(query).map { list -> list.map(::toModel) }

    override suspend fun getTaskById(id: Long): Task? =
        dao.getTaskById(id)?.let(::toModel)

    override suspend fun addTask(task: Task): Long =
        dao.insertTask(toEntity(task))

    override suspend fun updateTask(task: Task) =
        dao.updateTask(toEntity(task))

    override suspend fun deleteTask(task: Task) =
        dao.deleteTask(toEntity(task))

    override suspend fun setTaskCompleted(id: Long, completed: Boolean) =
        dao.setTaskCompleted(id, completed)

    override suspend fun deleteAllCompleted() =
        dao.deleteAllCompleted()

    // ── Mappers ──────────────────────────────────────────────────────────────

    private fun toModel(entity: TaskEntity) = Task(
        id = entity.id,
        title = entity.title,
        description = entity.description,
        priority = Priority.values()[entity.priority],
        isCompleted = entity.isCompleted,
        dueDateMillis = entity.dueDateMillis,
        createdAtMillis = entity.createdAtMillis,
        updatedAtMillis = entity.updatedAtMillis,
    )

    private fun toEntity(model: Task) = TaskEntity(
        id = model.id,
        title = model.title,
        description = model.description,
        priority = model.priority.ordinal,
        isCompleted = model.isCompleted,
        dueDateMillis = model.dueDateMillis,
        createdAtMillis = model.createdAtMillis,
        updatedAtMillis = System.currentTimeMillis(),
    )
}
