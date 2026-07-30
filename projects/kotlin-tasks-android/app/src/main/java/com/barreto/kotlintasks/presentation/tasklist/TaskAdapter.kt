package com.barreto.kotlintasks.presentation.tasklist

import android.graphics.Paint
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.core.content.ContextCompat
import androidx.core.view.isVisible
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.barreto.kotlintasks.R
import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.databinding.ItemTaskBinding
import com.barreto.kotlintasks.domain.model.Task
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class TaskAdapter(
    private val onToggleCompleted: (Task) -> Unit,
    private val onTaskClick: (Task) -> Unit,
) : ListAdapter<Task, TaskAdapter.TaskViewHolder>(TaskDiffCallback()) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TaskViewHolder {
        val binding = ItemTaskBinding.inflate(
            LayoutInflater.from(parent.context), parent, false
        )
        return TaskViewHolder(binding)
    }

    override fun onBindViewHolder(holder: TaskViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class TaskViewHolder(
        private val binding: ItemTaskBinding,
    ) : RecyclerView.ViewHolder(binding.root) {

        private val dateFormatter = SimpleDateFormat("dd MMM yyyy", Locale.getDefault())

        fun bind(task: Task) {
            binding.tvTaskTitle.text = task.title

            // Strike-through on completed tasks
            binding.tvTaskTitle.paintFlags = if (task.isCompleted) {
                binding.tvTaskTitle.paintFlags or Paint.STRIKE_THRU_TEXT_FLAG
            } else {
                binding.tvTaskTitle.paintFlags and Paint.STRIKE_THRU_TEXT_FLAG.inv()
            }

            // Description
            if (task.description.isNotBlank()) {
                binding.tvTaskDescription.isVisible = true
                binding.tvTaskDescription.text = task.description
            } else {
                binding.tvTaskDescription.isVisible = false
            }

            // Due date
            task.dueDateMillis?.let { millis ->
                binding.tvDueDate.isVisible = true
                binding.tvDueDate.text = dateFormatter.format(Date(millis))
            } ?: run {
                binding.tvDueDate.isVisible = false
            }

            // Priority color stripe
            val priorityColor = when (task.priority) {
                Priority.HIGH   -> ContextCompat.getColor(itemView.context, R.color.priority_high)
                Priority.MEDIUM -> ContextCompat.getColor(itemView.context, R.color.priority_medium)
                Priority.LOW    -> ContextCompat.getColor(itemView.context, R.color.priority_low)
            }
            binding.viewPriorityIndicator.setBackgroundColor(priorityColor)

            // Checkbox (suppress listener during bind to avoid feedback loops)
            binding.checkboxCompleted.setOnCheckedChangeListener(null)
            binding.checkboxCompleted.isChecked = task.isCompleted
            binding.checkboxCompleted.setOnCheckedChangeListener { _, _ ->
                onToggleCompleted(task)
            }

            // Row click → edit
            binding.root.setOnClickListener { onTaskClick(task) }
        }
    }

    class TaskDiffCallback : DiffUtil.ItemCallback<Task>() {
        override fun areItemsTheSame(oldItem: Task, newItem: Task): Boolean =
            oldItem.id == newItem.id

        override fun areContentsTheSame(oldItem: Task, newItem: Task): Boolean =
            oldItem == newItem
    }
}
