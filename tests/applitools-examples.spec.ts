import { test } from "@applitools/eyes-playwright/fixture";

// NOTE: Change the reporter to reporter: "@applitools/eyes-playwright/reporter" in playwright.config.ts'
// Run this spec first to generate the baselines in Applitools. Run the after spec to create the visual diffs.

test.describe("Applitools Examples", () => {
  //Compare with the baseline (in before spec), add a displacement.
  //With ignoreDisplacements false, the visual test will fail for all elements.
  //With ignoreDisplacements added, the visual test will only fail for the new element.
  test("displacements", async ({ page, eyes }) => {
    await page.goto("https://sandbox.applitools.com/bank");
    await eyes.check("displacement test");

    // await page.goto(
    //   "https://sandbox.applitools.com/bank?ignoreDisplacements=true"
    // );
    // await eyes.check("displacement test", {
    //   ignoreDisplacements: false,
    // });
  });

  //Create the baseline image
  test("dynamic data", async ({ page, eyes }) => {
    //Compare with the baseline (in before spec), add a displacement.
    //With matchLevel: Layout added, it will ignore all dynamic data.
    await page.goto("https://sandbox.applitools.com/bank/dashboard");
    await eyes.check("layout test before");

    // await page.goto(
    //   "https://sandbox.applitools.com/bank/dashboard?layoutAlgo=true"
    // );
    // await eyes.check("layout test", { matchLevel: "Layout" });
  });

  //Create the baseline image
  test("subtle visual changes", async ({ page, eyes }) => {
    await page.goto("https://sandbox.applitools.com/bank");
    await eyes.check("small visual changes test");

    // await page.goto("https://sandbox.applitools.com/bank");
    // await page.evaluate(() => {
    //   let text = document.querySelector("#log-in") as HTMLElement;
    //   text.innerText = "Sinn in";
    //   let input = document.querySelector("#username") as HTMLInputElement;
    //   input.placeholder = "Enter your userna";
    // });
    // await eyes.check("small visual changes test");

    //Users can use a layoutRegion(s) or ignoreRegion(s) if these visual diffs are intentional.
    // await eyes.check('small visual changes test after', {layoutRegions: ['#log-in', '#username']});
  });
});
