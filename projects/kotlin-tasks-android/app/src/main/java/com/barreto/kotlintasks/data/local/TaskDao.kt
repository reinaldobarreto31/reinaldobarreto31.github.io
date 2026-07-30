package com.barreto.kotlintasks.data.local

import androidx.room.*
import kotlinx.coroutines.flow.Flow

/**
 * Room DAO — all queries are reactive (Flow) so the UI
 * automatically re-renders on data changes.
 */
@Dao
interface TaskDao {

    @Query("SELECT * FROM tasks ORDER BY priority DESC, created_at_millis DESC")
    fun getAllTasks(): Flow<List<TaskEntity>>

    @Query("SELECT * FROM tasks WHERE is_completed = 0 ORDER BY priority DESC, due_date_millis ASC")
    fun getPendingTasks(): Flow<List<TaskEntity>>

    @Query("SELECT * FROM tasks WHERE is_completed = 1 ORDER BY updated_at_millis DESC")
    fun getCompletedTasks(): Flow<List<TaskEntity>>

    @Query("SELECT * FROM tasks WHERE priority = :priority ORDER BY created_at_millis DESC")
    fun getTasksByPriority(priority: Int): Flow<List<TaskEntity>>

    @Query("""
        SELECT * FROM tasks
        WHERE title LIKE '%' || :query || '%'
        OR description LIKE '%' || :query || '%'
        ORDER BY priority DESC
    """)
    fun searchTasks(query: String): Flow<List<TaskEntity>>

    @Query("SELECT * FROM tasks WHERE id = :id")
    suspend fun getTaskById(id: Long): TaskEntity?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTask(task: TaskEntity): Long

    @Update
    suspend fun updateTask(task: TaskEntity)

    @Delete
    suspend fun deleteTask(task: TaskEntity)

    @Query("UPDATE tasks SET is_completed = :completed, updated_at_millis = :updatedAt WHERE id = :id")
    suspend fun setTaskCompleted(id: Long, completed: Boolean, updatedAt: Long = System.currentTimeMillis())

    @Query("DELETE FROM tasks WHERE is_completed = 1")
    suspend fun deleteAllCompleted()
}
