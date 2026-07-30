package com.barreto.kotlintasks

import android.app.Application
import android.content.Context
import androidx.test.runner.AndroidJUnitRunner
import dagger.hilt.android.testing.HiltTestApplication

/**
 * Custom test runner that swaps the real Application with [HiltTestApplication]
 * so that Hilt can inject fakes and test doubles in instrumented tests.
 *
 * Registered in app/build.gradle.kts:
 *   testInstrumentationRunner = "com.barreto.kotlintasks.HiltTestRunner"
 */
class HiltTestRunner : AndroidJUnitRunner() {
    override fun newApplication(
        cl: ClassLoader?,
        className: String?,
        context: Context?,
    ): Application = super.newApplication(cl, HiltTestApplication::class.java.name, context)
}
