package com.barreto.kotlintasks.di

import android.content.Context
import androidx.room.Room
import com.barreto.kotlintasks.data.local.TaskDatabase
import com.barreto.kotlintasks.data.repository.TaskRepository
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import dagger.Binds
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object DatabaseModule {

    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): TaskDatabase =
        Room.databaseBuilder(
            context,
            TaskDatabase::class.java,
            TaskDatabase.DATABASE_NAME,
        ).build()

    @Provides
    fun provideTaskDao(db: TaskDatabase) = db.taskDao()
}

@Module
@InstallIn(SingletonComponent::class)
abstract class RepositoryModule {

    @Binds
    @Singleton
    abstract fun bindTaskRepository(impl: TaskRepository): ITaskRepository
}
