package com.barreto.kotlintasks.presentation.taskdetail

import android.app.DatePickerDialog
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import com.barreto.kotlintasks.R
import com.barreto.kotlintasks.data.local.Priority
import com.barreto.kotlintasks.databinding.FragmentTaskDetailBinding
import com.google.android.material.snackbar.Snackbar
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

@AndroidEntryPoint
class TaskDetailFragment : Fragment() {

    private var _binding: FragmentTaskDetailBinding? = null
    private val binding get() = _binding!!

    private val viewModel: TaskDetailViewModel by viewModels()
    private val args: TaskDetailFragmentArgs by navArgs()

    private var selectedDueDateMillis: Long? = null
    private val dateFormatter = SimpleDateFormat("dd MMM yyyy", Locale.getDefault())

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?
    ): View {
        _binding = FragmentTaskDetailBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Load existing task if editing
        if (args.taskId != -1L) {
            viewModel.loadTask(args.taskId)
            requireActivity().title = getString(R.string.title_edit_task)
        } else {
            requireActivity().title = getString(R.string.title_add_task)
        }

        setupDatePicker()
        setupButtons()
        observeViewModel()
    }

    private fun setupDatePicker() {
        binding.btnPickDate.setOnClickListener {
            val calendar = Calendar.getInstance().apply {
                selectedDueDateMillis?.let { timeInMillis = it }
            }
            DatePickerDialog(
                requireContext(),
                { _, year, month, dayOfMonth ->
                    val cal = Calendar.getInstance()
                    cal.set(year, month, dayOfMonth, 0, 0, 0)
                    cal.set(Calendar.MILLISECOND, 0)
                    selectedDueDateMillis = cal.timeInMillis
                    binding.btnPickDate.text = dateFormatter.format(Date(cal.timeInMillis))
                },
                calendar.get(Calendar.YEAR),
                calendar.get(Calendar.MONTH),
                calendar.get(Calendar.DAY_OF_MONTH),
            ).show()
        }
    }

    private fun setupButtons() {
        binding.btnSave.setOnClickListener {
            val title = binding.etTitle.text?.toString().orEmpty()
            val description = binding.etDescription.text?.toString().orEmpty()
            val priority = getSelectedPriority()
            viewModel.saveTask(
                existingId = args.taskId,
                title = title,
                description = description,
                priority = priority,
                dueDateMillis = selectedDueDateMillis,
            )
        }

        binding.btnCancel.setOnClickListener {
            findNavController().popBackStack()
        }
    }

    private fun getSelectedPriority(): Priority = when (binding.chipGroupPriority.checkedChipId) {
        R.id.chipPriorityHigh -> Priority.HIGH
        R.id.chipPriorityLow  -> Priority.LOW
        else                  -> Priority.MEDIUM
    }

    private fun observeViewModel() {
        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.uiState.collect { state ->
                    when (state) {
                        is DetailUiState.Loaded -> populateForm(state.task)
                        is DetailUiState.Saved  -> findNavController().popBackStack()
                        is DetailUiState.Error  -> {
                            if (state.message.contains("título", ignoreCase = true)) {
                                binding.tilTitle.error = state.message
                            } else {
                                Snackbar.make(binding.root, state.message, Snackbar.LENGTH_LONG).show()
                            }
                        }
                        else -> Unit
                    }
                }
            }
        }
    }

    private fun populateForm(task: com.barreto.kotlintasks.domain.model.Task) {
        binding.etTitle.setText(task.title)
        binding.etDescription.setText(task.description)

        val chipId = when (task.priority) {
            Priority.HIGH   -> R.id.chipPriorityHigh
            Priority.LOW    -> R.id.chipPriorityLow
            Priority.MEDIUM -> R.id.chipPriorityMedium
        }
        binding.chipGroupPriority.check(chipId)

        task.dueDateMillis?.let { millis ->
            selectedDueDateMillis = millis
            binding.btnPickDate.text = dateFormatter.format(Date(millis))
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
