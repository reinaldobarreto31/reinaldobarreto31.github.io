package com.barreto.kotlintasks.presentation.taskdetail

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.WorkManager
import androidx.work.workDataOf
import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import com.barreto.kotlintasks.notification.TaskReminderWorker
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.util.concurrent.TimeUnit
import javax.inject.Inject

sealed class DetailUiState {
    object Idle : DetailUiState()
    data class Loaded(val task: Task) : DetailUiState()
    object Saved : DetailUiState()
    data class Error(val message: String) : DetailUiState()
}

@HiltViewModel
class TaskDetailViewModel @Inject constructor(
    private val repository: ITaskRepository,
    private val workManager: WorkManager,
) : ViewModel() {

    private val _uiState = MutableStateFlow<DetailUiState>(DetailUiState.Idle)
    val uiState: StateFlow<DetailUiState> = _uiState.asStateFlow()

    /** Load an existing task for editing; call only when taskId ≠ -1. */
    fun loadTask(taskId: Long) {
        viewModelScope.launch {
            val task = repository.getTaskById(taskId)
            _uiState.value = if (task != null) {
                DetailUiState.Loaded(task)
            } else {
                DetailUiState.Error("Tarefa não encontrada")
            }
        }
    }

    /** Save (create or update) a task, then schedule or replace its WorkManager reminder. */
    fun saveTask(
        existingId: Long,
        title: String,
        description: String,
        priority: Priority,
        dueDateMillis: Long?,
    ) {
        if (title.isBlank()) {
            _uiState.value = DetailUiState.Error("O título não pode estar vazio")
            return
        }

        viewModelScope.launch {
            val taskId: Long
            val trimmedTitle = title.trim()

            if (existingId == -1L) {
                // Create — addTask returns the new row id
                taskId = repository.addTask(
                    Task(
                        title = trimmedTitle,
                        description = description.trim(),
                        priority = priority,
                        dueDateMillis = dueDateMillis,
                    )
                )
            } else {
                // Update — preserve immutable fields
                val current = repository.getTaskById(existingId) ?: return@launch
                repository.updateTask(
                    current.copy(
                        title = trimmedTitle,
                        description = description.trim(),
                        priority = priority,
                        dueDateMillis = dueDateMillis,
                    )
                )
                taskId = existingId
            }

            scheduleOrCancelReminder(taskId, trimmedTitle, dueDateMillis)
            _uiState.value = DetailUiState.Saved
        }
    }

    /**
     * Cancels any existing reminder for [taskId], then enqueues a new one if
     * [dueDateMillis] is non-null and still in the future.
     */
    private fun scheduleOrCancelReminder(taskId: Long, title: String, dueDateMillis: Long?) {
        val tag = TaskReminderWorker.workTagFor(taskId)
        workManager.cancelAllWorkByTag(tag)

        if (dueDateMillis == null) return

        val delayMs = dueDateMillis - System.currentTimeMillis()
        if (delayMs <= 0) return // due date already passed — skip

        val request = OneTimeWorkRequestBuilder<TaskReminderWorker>()
            .setInitialDelay(delayMs, TimeUnit.MILLISECONDS)
            .setInputData(
                workDataOf(
                    TaskReminderWorker.KEY_TASK_ID    to taskId,
                    TaskReminderWorker.KEY_TASK_TITLE to title,
                )
            )
            .addTag(tag)
            .build()

        workManager.enqueue(request)
    }
}
