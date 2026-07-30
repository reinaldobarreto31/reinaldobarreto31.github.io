package com.barreto.kotlintasks.presentation.tasklist

import android.os.Bundle
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuInflater
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import androidx.core.view.MenuProvider
import androidx.core.view.isVisible
import androidx.core.widget.doAfterTextChanged
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.RecyclerView
import com.barreto.kotlintasks.R
import com.barreto.kotlintasks.databinding.FragmentTaskListBinding
import com.google.android.material.snackbar.Snackbar
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.launch

@AndroidEntryPoint
class TaskListFragment : Fragment() {

    private var _binding: FragmentTaskListBinding? = null
    private val binding get() = _binding!!

    private val viewModel: TaskListViewModel by viewModels()
    private lateinit var taskAdapter: TaskAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?
    ): View {
        _binding = FragmentTaskListBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setupAdapter()
        setupFilterChips()
        setupSearch()
        setupFab()
        setupSwipeToDelete()
        setupMenu()
        observeViewModel()
    }

    private fun setupAdapter() {
        taskAdapter = TaskAdapter(
            onToggleCompleted = { task -> viewModel.toggleTaskCompleted(task) },
            onTaskClick = { task ->
                val action = TaskListFragmentDirections
                    .actionTaskListToEditTask(taskId = task.id)
                findNavController().navigate(action)
            }
        )
        binding.recyclerViewTasks.adapter = taskAdapter
    }

    private fun setupFilterChips() {
        binding.chipGroupFilter.setOnCheckedStateChangeListener { _, checkedIds ->
            val filter = when {
                checkedIds.contains(R.id.chipPending)   -> TaskFilter.PENDING
                checkedIds.contains(R.id.chipCompleted) -> TaskFilter.COMPLETED
                else                                     -> TaskFilter.ALL
            }
            viewModel.onFilterChanged(filter)
        }
    }

    private fun setupSearch() {
        binding.etSearch.doAfterTextChanged { text ->
            viewModel.onSearchQueryChanged(text?.toString().orEmpty())
        }
    }

    private fun setupFab() {
        binding.fabAddTask.setOnClickListener {
            findNavController().navigate(
                TaskListFragmentDirections.actionTaskListToAddTask()
            )
        }
    }

    private fun setupSwipeToDelete() {
        val swipe = object : ItemTouchHelper.SimpleCallback(0, ItemTouchHelper.LEFT) {
            override fun onMove(rv: RecyclerView, vh: RecyclerView.ViewHolder,
                                target: RecyclerView.ViewHolder) = false

            override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {
                val task = taskAdapter.currentList[viewHolder.adapterPosition]
                viewModel.deleteTask(task)
                Snackbar.make(binding.root, task.title, Snackbar.LENGTH_LONG)
                    .setAction(R.string.action_cancel) {
                        // undo not wired (requires separate UndoUseCase); scaffold only
                    }.show()
            }
        }
        ItemTouchHelper(swipe).attachToRecyclerView(binding.recyclerViewTasks)
    }

    private fun setupMenu() {
        requireActivity().addMenuProvider(object : MenuProvider {
            override fun onCreateMenu(menu: Menu, menuInflater: MenuInflater) {
                menuInflater.inflate(R.menu.menu_task_list, menu)
            }

            override fun onMenuItemSelected(menuItem: MenuItem): Boolean {
                return when (menuItem.itemId) {
                    R.id.action_delete_completed -> {
                        viewModel.deleteAllCompleted()
                        true
                    }
                    else -> false
                }
            }
        }, viewLifecycleOwner, Lifecycle.State.RESUMED)
    }

    private fun observeViewModel() {
        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.tasks.collect { tasks ->
                    taskAdapter.submitList(tasks)
                    binding.layoutEmptyState.isVisible = tasks.isEmpty()
                    binding.recyclerViewTasks.isVisible = tasks.isNotEmpty()
                }
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
