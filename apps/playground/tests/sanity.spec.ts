import { test, expect } from "@playwright/test";
import {
  getResourceFromConsoleInteraction,
  getResourceNodeFromConsoleMap,
} from "./helper";

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

test("executes function and test for successful response", async ({ page }) => {
  const func = getResourceNodeFromConsoleMap(page, "root/Default/Function");
  await func.click();
  const invoke = getResourceFromConsoleInteraction(
    page,
    "cloud.function:invoke",
  );
  await invoke.click();
  expect(
    await getResourceFromConsoleInteraction(
      page,
      "cloud.function:response",
    ).textContent(),
  ).toEqual(
    JSON.stringify(
      {
        success: true,
      },
      undefined,
      2,
    ),
  );
});

test("can read code query param", async ({ page }) => {
  await page.goto(`${url}&code=Ly8gZG9uJ3QgYnJpbmcgY2xvdWQ7`);
  const code = page.getByText("// don't bring cloud;").first();
  await code.waitFor();
});
