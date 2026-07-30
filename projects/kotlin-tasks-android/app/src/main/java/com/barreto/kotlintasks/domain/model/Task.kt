package com.barreto.kotlintasks.domain.model

import com.barreto.kotlintasks.data.local.Priority

/**
 * Domain model — decoupled from Room entities.
 * The Repository maps TaskEntity ↔ Task.
 */
data class Task(
    val id: Long = 0,
    val title: String,
    val description: String = "",
    val priority: Priority = Priority.MEDIUM,
    val isCompleted: Boolean = false,
    val dueDateMillis: Long? = null,
    val createdAtMillis: Long = System.currentTimeMillis(),
    val updatedAtMillis: Long = System.currentTimeMillis(),
)
