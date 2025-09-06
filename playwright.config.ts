import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './playwright/tests',
  timeout: 40000,  // Maximum time for each test
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below */
  expect: {
    timeout: 10000, // Default timeout for visibility and other assertions
  },
  use: {
    actionTimeout: 10000, // click type
    headless: false,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:8080/',
    video: 'on-first-retry', // When the test fails on first retry
    screenshot: 'only-on-failure',

    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry',

    viewport: null,
    launchOptions: {
      args: ['--start-maximized'], // Ensure browser starts maximized
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      // use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
