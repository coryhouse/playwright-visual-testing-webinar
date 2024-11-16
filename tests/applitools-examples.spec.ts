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

    // STEP 2: Dynamic data with matchLevel: Layout
    // await page.goto(
    //   "https://sandbox.applitools.com/bank/dashboard?layoutAlgo=true"
    // );
    // // Deliberately change the markup to force non-layout diff.
    // await page.evaluate(() => {
    //   let elem = document.querySelector(
    //     ".dashboardNav_logoLabel__iQ5Pd"
    //   ) as HTMLElement;
    //   elem.style.backgroundColor = "red";
    //   elem.style.color = "black";
    //   let text = document.querySelector(
    //     ".dashboardOverview_hideMobile__L9uZF > div:nth-child(1)"
    //   ) as HTMLElement;
    //   text.innerText = "Total Debt";
    // });
    // await eyes.check("layout test", { matchLevel: "Layout" });
  });

  //Create the baseline image
  test("subtle visual changes", async ({ page, eyes }) => {
    await page.goto("https://sandbox.applitools.com/bank");
    await eyes.check("small visual changes test");

    // STEP 2: Uncomment this and run again after commenting out above steps.
    // await page.goto("https://sandbox.applitools.com/bank");
    // await page.evaluate(() => {
    //   let text = document.querySelector("#log-in") as HTMLElement;
    //   text.innerText = "Sinn in";
    //   let input = document.querySelector("#username") as HTMLInputElement;
    //   input.placeholder = "Enter your userna";
    // });
    // await eyes.check("small visual changes test");
    //Users can use a layoutRegion(s) or ignoreRegion(s) if these visual diffs are intentional.
    // await eyes.check("small visual changes test after", {
    //   layoutRegions: ["#log-in", "#username"],
    // });
  });
});
