package com.barreto.kotlintasks.presentation.tasklist

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.work.WorkManager
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import com.barreto.kotlintasks.notification.TaskReminderWorker
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class TaskListViewModel @Inject constructor(
    private val repository: ITaskRepository,
    private val workManager: WorkManager,
) : ViewModel() {

    private val _searchQuery = MutableStateFlow("")
    private val _filter = MutableStateFlow(TaskFilter.ALL)

    val filter: StateFlow<TaskFilter> = _filter.asStateFlow()

    @OptIn(ExperimentalCoroutinesApi::class, FlowPreview::class)
    val tasks: StateFlow<List<Task>> = combine(_searchQuery.debounce(300), _filter) { query, filter ->
        Pair(query, filter)
    }.flatMapLatest { (query, filter) ->
        when {
            query.isNotBlank() -> repository.searchTasks(query)
            filter == TaskFilter.PENDING -> repository.getPendingTasks()
            filter == TaskFilter.COMPLETED -> repository.getCompletedTasks()
            else -> repository.getAllTasks()
        }
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), emptyList())

    fun onSearchQueryChanged(query: String) { _searchQuery.value = query }

    fun onFilterChanged(filter: TaskFilter) { _filter.value = filter }

    fun toggleTaskCompleted(task: Task) {
        viewModelScope.launch {
            val nowCompleted = !task.isCompleted
            repository.setTaskCompleted(task.id, nowCompleted)
            // Cancel the pending reminder when a task is marked complete
            if (nowCompleted) {
                workManager.cancelAllWorkByTag(TaskReminderWorker.workTagFor(task.id))
            }
        }
    }

    fun deleteTask(task: Task) {
        viewModelScope.launch {
            repository.deleteTask(task)
            // Always cancel any pending reminder when a task is deleted
            workManager.cancelAllWorkByTag(TaskReminderWorker.workTagFor(task.id))
        }
    }

    fun undoDelete(task: Task) {
        viewModelScope.launch {
            // Re-insert the task with its original ID (Room uses REPLACE strategy,
            // so the row is restored at the same primary key).
            repository.addTask(task)
        }
    }

    fun deleteAllCompleted() {
        viewModelScope.launch {
            // Completed tasks already had their reminders cancelled when they were
            // marked complete via toggleTaskCompleted, so no extra cancellation needed.
            repository.deleteAllCompleted()
        }
    }
}

enum class TaskFilter { ALL, PENDING, COMPLETED }
