package com.barreto.kotlintasks.presentation.tasklist

import androidx.fragment.app.testing.launchFragmentInContainer
import androidx.navigation.Navigation
import androidx.navigation.testing.TestNavHostController
import androidx.test.core.app.ApplicationProvider
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withId
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.barreto.kotlintasks.R
import com.barreto.kotlintasks.domain.model.Task
import com.barreto.kotlintasks.domain.repository.ITaskRepository
import dagger.hilt.android.testing.HiltAndroidRule
import dagger.hilt.android.testing.HiltAndroidTest
import io.mockk.every
import kotlinx.coroutines.flow.flowOf
import org.hamcrest.Matchers.not
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import javax.inject.Inject

/**
 * Instrumented UI tests for [TaskListFragment].
 *
 * These tests use the Hilt [TestAppModule] to inject MockK doubles, so no real
 * database or WorkManager is needed. Run on a physical device or emulator.
 */
@HiltAndroidTest
@RunWith(AndroidJUnit4::class)
class TaskListFragmentTest {

    @get:Rule
    val hiltRule = HiltAndroidRule(this)

    @Inject
    lateinit var repository: ITaskRepository

    @Before
    fun setUp() {
        hiltRule.inject()
    }

    // ── Empty-state visibility ──────────────────────────────────────────────

    @Test
    fun emptyState_isDisplayed_whenTaskListIsEmpty() {
        // Repository returns no tasks
        every { repository.getAllTasks() } returns flowOf(emptyList())
        every { repository.getPendingTasks() } returns flowOf(emptyList())
        every { repository.getCompletedTasks() } returns flowOf(emptyList())
        every { repository.searchTasks(any()) } returns flowOf(emptyList())

        launchFragmentInContainer<TaskListFragment>(themeResId = R.style.Theme_KotlinTasks)

        onView(withId(R.id.layoutEmptyState)).check(matches(isDisplayed()))
        onView(withId(R.id.recyclerViewTasks)).check(matches(not(isDisplayed())))
    }

    @Test
    fun recyclerView_isDisplayed_whenTaskListHasItems() {
        val tasks = listOf(
            Task(id = 1L, title = "Buy milk"),
            Task(id = 2L, title = "Walk the dog"),
        )
        every { repository.getAllTasks() } returns flowOf(tasks)
        every { repository.getPendingTasks() } returns flowOf(emptyList())
        every { repository.getCompletedTasks() } returns flowOf(emptyList())
        every { repository.searchTasks(any()) } returns flowOf(emptyList())

        launchFragmentInContainer<TaskListFragment>(themeResId = R.style.Theme_KotlinTasks)

        onView(withId(R.id.recyclerViewTasks)).check(matches(isDisplayed()))
        onView(withId(R.id.layoutEmptyState)).check(matches(not(isDisplayed())))
    }

    // ── FAB navigation ──────────────────────────────────────────────────────

    @Test
    fun fab_navigatesToAddTaskDestination_whenClicked() {
        every { repository.getAllTasks() } returns flowOf(emptyList())
        every { repository.getPendingTasks() } returns flowOf(emptyList())
        every { repository.getCompletedTasks() } returns flowOf(emptyList())
        every { repository.searchTasks(any()) } returns flowOf(emptyList())

        val navController = TestNavHostController(ApplicationProvider.getApplicationContext())

        val scenario = launchFragmentInContainer<TaskListFragment>(
            themeResId = R.style.Theme_KotlinTasks,
        )
        scenario.onFragment { fragment ->
            navController.setGraph(R.navigation.nav_graph)
            Navigation.setViewNavController(fragment.requireView(), navController)
        }

        onView(withId(R.id.fabAddTask)).perform(click())

        // After clicking FAB the current destination should be the detail/add screen
        val currentDest = navController.currentDestination?.id
        assert(currentDest == R.id.taskDetailFragment) {
            "Expected taskDetailFragment, but current destination id was $currentDest"
        }
    }
}
