package com.barreto.kotlintasks.di

import androidx.work.WorkManager
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.components.SingletonComponent
import dagger.hilt.testing.TestInstallIn
import io.mockk.mockk
import javax.inject.Singleton

/**
 * Replaces [DatabaseModule] and [RepositoryModule] in instrumented tests with relaxed
 * MockK doubles so that no real Room database or WorkManager is needed.
 *
 * Individual tests can further configure these mocks after injection via [HiltAndroidRule].
 */
@Module
@TestInstallIn(
    components = [SingletonComponent::class],
    replaces = [DatabaseModule::class, RepositoryModule::class],
)
object TestAppModule {

    @Provides
    @Singleton
    fun provideTaskRepository(): ITaskRepository = mockk(relaxed = true)

    @Provides
    @Singleton
    fun provideWorkManager(): WorkManager = mockk(relaxed = true)
}
