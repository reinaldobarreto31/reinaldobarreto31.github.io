package com.barreto.kotlintasks.notification

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import com.barreto.kotlintasks.R

/**
 * BroadcastReceiver that fires when a task due-date reminder alarm goes off.
 *
 * Scheduled via WorkManager (future implementation); this stub creates the
 * notification channel and posts a basic notification so the manifest receiver
 * declaration compiles and the app behaves correctly on OS boot / alarm fire.
 */
class TaskReminderReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        val taskTitle = intent.getStringExtra(EXTRA_TASK_TITLE) ?: return
        val taskId = intent.getLongExtra(EXTRA_TASK_ID, -1L)

        ensureNotificationChannel(context)

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_popup_reminder)
            .setContentTitle(context.getString(R.string.app_name))
            .setContentText(taskTitle)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .build()

        if (taskId != -1L) {
            NotificationManagerCompat.from(context)
                .notify(taskId.toInt(), notification)
        }
    }

    private fun ensureNotificationChannel(context: Context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                context.getString(R.string.notification_channel_name),
                NotificationManager.IMPORTANCE_HIGH,
            ).apply {
                description = context.getString(R.string.notification_channel_description)
            }
            val manager = context.getSystemService(NotificationManager::class.java)
            manager.createNotificationChannel(channel)
        }
    }

    companion object {
        const val CHANNEL_ID       = "task_reminders"
        const val EXTRA_TASK_ID    = "extra_task_id"
        const val EXTRA_TASK_TITLE = "extra_task_title"
    }
}
