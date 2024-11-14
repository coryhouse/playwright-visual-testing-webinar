import { test, expect } from "@playwright/test";

// NOTE: Change the reporter to reporter: "html" in playwright.config.ts'
//
// An example of why pixel-based tools don't work well. Users will keep adjusting the threshold to make them pass and ultimately miss visual diffs.
// In the below tests. Run it once to create the Playwright baseline images. Then comment out the original steps and uncomment out the other comparison ones.

test.describe("Playwright Visual Test Examples", () => {
  test("displacements", async ({ page }) => {
    //Create PW baseline then comment out.
    await page.goto("https://sandbox.applitools.com/bank");
    await expect(page).toHaveScreenshot("displacements.png");

    //Uncomment this and run again after commenting out above steps.
    //  await page.goto(
    //    "https://sandbox.applitools.com/bank?ignoreDisplacements=true"
    //  );
    //  await expect(page).toHaveScreenshot("displacements.png");
  });

  test("dynamic data", async ({ page }) => {
    //Create PW baseline then comment out.
    await page.goto("https://sandbox.applitools.com/bank/dashboard");
    await expect(page).toHaveScreenshot("dynamic.png");
    //Uncomment this and run again after commenting out above steps.
    //  await page.goto(
    //    "https://sandbox.applitools.com/bank/dashboard?layoutAlgo=true"
    //  );
    //  await page.evaluate(() => {
    //    let elem = document.querySelector(
    //      ".dashboardNav_logoLabel__iQ5Pd"
    //    ) as HTMLElement;
    //    elem.style.backgroundColor = "red";
    //    elem.style.color = "black";
    //    let text = document.querySelector(
    //      ".dashboardOverview_hideMobile__L9uZF > div:nth-child(1)"
    //    ) as HTMLElement;
    //    text.innerText = "Total Debt";
    //  });
    //  await expect(page).toHaveScreenshot("dynamic.png", {
    //    threshold: 0.1,
    //    timeout: 30000,
    //  });
  });

  test("subtle visual changes", async ({ page }) => {
    //Create PW baseline then comment out.
    await page.goto("https://sandbox.applitools.com/bank");
    await expect(page).toHaveScreenshot("small-changes.png");

    //Uncomment this and run again after commenting out above steps.
    // await page.goto('https://sandbox.applitools.com/bank');
    // await page.evaluate(() => {
    //    let text = document.querySelector('#log-in') as HTMLElement;
    //    text.innerText = 'Sinn in';
    //
    //    let input = document.querySelector('#username') as HTMLElement;
    //    input.placeholder = 'Enter your userna';
    // });
    // await expect(page).toHaveScreenshot('small-changes.png', {threshold: 0.10, timeout: 30000});
  });
});
