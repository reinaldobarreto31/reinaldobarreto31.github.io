package com.barreto.kotlintasks.presentation.taskdetail

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
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

    /** Save (create or update) a task with the provided field values. */
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
            if (existingId == -1L) {
                // Create
                repository.addTask(
                    Task(
                        title = title.trim(),
                        description = description.trim(),
                        priority = priority,
                        dueDateMillis = dueDateMillis,
                    )
                )
            } else {
                // Update — fetch current to preserve immutable fields
                val current = repository.getTaskById(existingId) ?: return@launch
                repository.updateTask(
                    current.copy(
                        title = title.trim(),
                        description = description.trim(),
                        priority = priority,
                        dueDateMillis = dueDateMillis,
                    )
                )
            }
            _uiState.value = DetailUiState.Saved
        }
    }
}
