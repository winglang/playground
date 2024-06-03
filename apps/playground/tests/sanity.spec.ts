import { test, expect } from "@playwright/test";

const url = `${
  process.env.TEST_URL ?? "http://localhost:5173"
}?disable_analytics=true`;

test.beforeEach(async ({ page }, testInfo) => {
  page.on("console", (msg) => {
    console.log(msg);
  });
  await page.exposeBinding("chrome", () => true);
  testInfo.snapshotSuffix = "";

  await page.goto(url);
  await page
    .frameLocator("#console")
    .getByTestId("loading-overlay")
    .waitFor({ state: "hidden" });
});

test("has editor", async ({ page }) => {
  const editor = page.getByRole("code");
  expect(await editor.screenshot()).toMatchSnapshot("editor.png", {
    maxDiffPixelRatio: 0.3,
  });
});

test("has map view", async ({ page }) => {
  const updatedMap = await page.waitForSelector("#console");
  expect(await updatedMap.screenshot()).toMatchSnapshot("map-view.png", {
    maxDiffPixelRatio: 0.3,
  });
});

// test("executes function and test for successful response", async ({ page }) => {
//   const func = getResourceNodeFromConsoleMap(page, "root/Default/Function");
//   await func.click();
//   const invoke = getResourceFromConsoleInteraction(
//     page,
//     "cloud.function:invoke",
//   );
//   await invoke.click();
//   expect(
//     await getResourceFromConsoleInteraction(
//       page,
//       "cloud.function:response",
//     ).textContent(),
//   ).toEqual(
//     JSON.stringify(
//       {
//         success: true,
//       },
//       undefined,
//       2,
//     ),
//   );
// });

test("can read code query param", async ({ page }) => {
  await page.goto(`${url}&code=Ly8gZG9uJ3QgYnJpbmcgY2xvdWQ7`);
  const code = page.getByText("// don't bring cloud;").first();
  await code.waitFor();
});

test("can copy console error", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);

  // Navigate to a page with an error ('bring aaa;')
  await page.goto(`${url}&code=YnJpbmcgYWFhOwo=`);
  await page.frameLocator("#console").getByTestId("loading-overlay").waitFor({ state: "hidden" });
  const updatedMap = page.frameLocator("#console");
  const copyButton = updatedMap.locator('button:text("Copy")');
  await copyButton.click();

  // Check that the clipboard contains the error
  let clipboardText = await page.evaluate("navigator.clipboard.readText()");
  expect(clipboardText).toContain("bring aaa;");
});
