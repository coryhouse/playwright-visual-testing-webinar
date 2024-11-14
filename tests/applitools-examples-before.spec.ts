import { test } from "@applitools/eyes-playwright/fixture";

// NOTE: Change the reporter to reporter: "@applitools/eyes-playwright/reporter" in playwright.config.ts'
// Run this spec first to generate the baselines in Applitools. Run the after spec to create the visual diffs.

test.describe("Applitools Examples", () => {
  //Create the baseline image
  test("displacements", async ({ page, eyes }) => {
    await page.goto("https://sandbox.applitools.com/bank");
    await eyes.check("displacement test before");
  });

  //Create the baseline image
  test("dynamic data", async ({ page, eyes }) => {
    await page.goto("https://sandbox.applitools.com/bank/dashboard");
    await eyes.check("layout test before");
  });

  //Create the baseline image
  test("subtle visual changes", async ({ page, eyes }) => {
    await page.goto("https://sandbox.applitools.com/bank");
    await eyes.check("small visual changes test before");
  });
});
