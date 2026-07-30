package com.barreto.kotlintasks.presentation.tasklist

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class TaskListViewModel @Inject constructor(
    private val repository: ITaskRepository,
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
            repository.setTaskCompleted(task.id, !task.isCompleted)
        }
    }

    fun deleteTask(task: Task) {
        viewModelScope.launch { repository.deleteTask(task) }
    }

    fun deleteAllCompleted() {
        viewModelScope.launch { repository.deleteAllCompleted() }
    }
}

enum class TaskFilter { ALL, PENDING, COMPLETED }
