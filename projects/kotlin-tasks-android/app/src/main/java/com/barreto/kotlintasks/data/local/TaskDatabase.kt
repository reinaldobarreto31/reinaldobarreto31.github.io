package com.barreto.kotlintasks.data.local

import androidx.room.Database
import androidx.room.RoomDatabase

/**
 * Singleton Room database. Use [AppModule] to inject via Hilt.
 */
@Database(
    entities = [TaskEntity::class],
    version = 1,
    exportSchema = true,
)
abstract class TaskDatabase : RoomDatabase() {
    abstract fun taskDao(): TaskDao

    companion object {
        const val DATABASE_NAME = "kotlin_tasks.db"
    }
}
