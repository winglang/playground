import { test, expect } from '@playwright/test';

const url = `${process.env.TEST_URL ?? 'http://localhost:5173'}?disable_analytics=true`;

test.beforeEach(async ({ page }, testInfo) => {
  page.on('console', (msg) => {
    console.log(msg);
  });
  await page.exposeBinding('chrome', () => true);
  testInfo.snapshotSuffix = "";

  await page.goto(url);
  await page.frameLocator('#console').getByTestId("loading-overlay").waitFor({ state: "hidden" });
});

test('has editor', async ({ page }) => {
  const editor = page.getByRole("code");
  expect(await editor.screenshot()).toMatchSnapshot(
    "editor.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

test('has map view', async ({ page }) => {
  const updatedMap = page.locator('#console');
  expect(await updatedMap.screenshot()).toMatchSnapshot(
    "map-view.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

test('can read code query param', async ({ page }) => {
  await page.goto(`${url}&code=Ly8gZG9uJ3QgYnJpbmcgY2xvdWQ7`);
  const code = page.getByText("// don't bring cloud;").first();
  await code.waitFor();
});
