import { defineConfig, devices } from "@playwright/test";
import { EyesFixture } from "@applitools/eyes-playwright/fixture";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<EyesFixture>({
  testDir: "./tests",
  timeout: 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: "@applitools/eyes-playwright/reporter",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000/",
    /* Configuration for Eyes VisualAI */
    eyesConfig: {
      /* The following and other configuration parameters are documented at: <url> */
      apiKey: "O7Ml9wjUQkY63Bkmx9HyshMUw8bi5111Mb0EqEcMneieQ110", // alternatively, set this via environment variable APPLITOOLS_API_KEY
      // TODO: Change before the prod demo.
      serverUrl: "https://testeyes.applitools.com/",
      // type: "ufg", // Uncomment this and browsersInfo to use Ultrafast Grid instead of "classic" mode, which is the default, which uses Playwright's browser settings.
      // browsersInfo: [
      //   { width: 1200, height: 900, name: "chrome" },
      //   { width: 1200, height: 900, name: "safari" },
      //   { width: 1200, height: 900, name: "firefox" },
      //   { width: 1200, height: 900, name: "edgechromium" },
      //   { chromeEmulationInfo: { deviceName: "iPad 7th Gen" } },
      //   { chromeEmulationInfo: { deviceName: "Galaxy S20" } },
      //   { iosDeviceInfo: { deviceName: "iPhone 11 Pro" } },
      // ],

      // failTestsOnDiff: false,
      // appName: 'My App',
      // matchLevel: 'Strict',
      // batch: { name: 'My Batch' },
      // proxy: {url: 'http://127.0.0.1:8888'},
      // stitchMode: 'CSS',
      // matchTimeout: 0,
      // waitBeforeScreenshots: 50,
      // saveNewTests: true,
    },

    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
});
