package com.barreto.kotlintasks.notification

import android.content.Context
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import com.barreto.kotlintasks.R

/**
 * WorkManager Worker that fires when a task's due-date reminder delay has elapsed.
 * Scheduled by TaskDetailViewModel; cancelled by TaskDetailViewModel and TaskListViewModel.
 */
class TaskReminderWorker(
    appContext: Context,
    params: WorkerParameters,
) : CoroutineWorker(appContext, params) {

    override suspend fun doWork(): Result {
        val taskId    = inputData.getLong(KEY_TASK_ID, -1L)
        val taskTitle = inputData.getString(KEY_TASK_TITLE) ?: return Result.failure()
        if (taskId == -1L) return Result.failure()

        val notification = NotificationCompat.Builder(applicationContext, TaskReminderReceiver.CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_popup_reminder)
            .setContentTitle(applicationContext.getString(R.string.app_name))
            .setContentText(taskTitle)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .build()

        NotificationManagerCompat.from(applicationContext)
            .notify(taskId.toInt(), notification)

        return Result.success()
    }

    companion object {
        const val KEY_TASK_ID    = "key_task_id"
        const val KEY_TASK_TITLE = "key_task_title"

        /** Stable tag used to cancel an existing reminder when the task changes. */
        fun workTagFor(taskId: Long) = "task_reminder_$taskId"
    }
}
