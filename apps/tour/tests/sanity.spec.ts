import { test, expect } from '@playwright/test';

const url = `${process.env.TEST_URL ?? 'http://localhost:5173'}?disable_analytics=true`;

test.beforeEach(async ({ page }, testInfo) => {
  page.on('console', (msg) => {
    console.log(msg);
  });
  await page.exposeBinding('chrome', () => true);
  testInfo.snapshotSuffix = "";

  await page.goto(url);

  const startButton = page.getByTestId("start-button");
  await startButton.waitFor();
  await startButton.click();
  await page.frameLocator('#console').getByTestId("loading-overlay").waitFor({ state: "hidden" });
});

test('has editor', async ({ page }) => {
  const editor = page.getByTestId("editor-panel")
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

