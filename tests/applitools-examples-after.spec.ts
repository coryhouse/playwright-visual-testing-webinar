import { test, expect } from "@applitools/eyes-playwright/fixture";

// NOTE: Change the reporter to reporter: "@applitools/eyes-playwright/reporter" in playwright.config.ts'
// Run this spec second to compare with the baselines in Applitools created with the before spec.

test.describe("Applitools Examples", () => {
  //Compare with the baseline (in before spec), add a displacement.
  //With ignoreDisplacements added, the visual test will only fail for the new element.
  test("displacements", async ({ page, eyes }) => {
    await page.goto(
      "https://sandbox.applitools.com/bank?ignoreDisplacements=true"
    );
    await eyes.check("displacement test after", { ignoreDisplacements: true });
  });

  //Compare with the baseline (in before spec), add a displacement.
  //With matchLevel: Layout added, it will ignore all dynamic data.
  test("dynamic data", async ({ page, eyes }) => {
    await page.goto(
      "https://sandbox.applitools.com/bank/dashboard?layoutAlgo=true"
    );
    await eyes.check("layout test", { matchLevel: "Layout" });
  });

  //Compare with the baseline (in before spec), add small text diffs.
  test("subtle visual changes", async ({ page, eyes }) => {
    await page.goto("https://sandbox.applitools.com/bank");
    await page.evaluate(() => {
      let text = document.querySelector("#log-in") as HTMLElement;
      text.innerText = "Sinn in";

      let input = document.querySelector("#username") as HTMLInputElement;
      input.placeholder = "Enter your userna";
    });

    await eyes.check("small visual changes test after");

    //Users can use a layoutRegion(s) or ignoreRegion(s) if these visual diffs are intentional.
    // await eyes.check('small visual changes test after', {layoutRegions: ['#log-in', '#username']});
  });
});
