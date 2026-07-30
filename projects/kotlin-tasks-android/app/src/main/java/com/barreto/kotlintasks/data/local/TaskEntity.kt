package com.barreto.kotlintasks.data.local

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

/**
 * Room entity mapped to the "tasks" table.
 * Kept in the data layer — domain uses [Task] model instead.
 */
@Entity(tableName = "tasks")
data class TaskEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,

    @ColumnInfo(name = "title")
    val title: String,

    @ColumnInfo(name = "description")
    val description: String = "",

    @ColumnInfo(name = "priority")
    val priority: Int = Priority.MEDIUM.ordinal, // 0=Low, 1=Medium, 2=High

    @ColumnInfo(name = "is_completed")
    val isCompleted: Boolean = false,

    @ColumnInfo(name = "due_date_millis")
    val dueDateMillis: Long? = null,

    @ColumnInfo(name = "created_at_millis")
    val createdAtMillis: Long = System.currentTimeMillis(),

    @ColumnInfo(name = "updated_at_millis")
    val updatedAtMillis: Long = System.currentTimeMillis(),
)

enum class Priority { LOW, MEDIUM, HIGH }
