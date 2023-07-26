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

  const nextButton = page.getByTestId("next-button");
  await nextButton.waitFor();
});

test('has editor', async ({ page }) => {
  const editor = page.getByTestId("editor-panel")
  await editor.waitFor();
  expect(await editor.screenshot()).toMatchSnapshot(
    "editor.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

test('has map view', async ({ page }) => {
  const root = page.frameLocator('#console').getByText("No logs").first();
  await root.waitFor();

  await page.waitForTimeout(2000);

  const updatedMap = page.locator('#console');
  expect(await updatedMap.screenshot()).toMatchSnapshot(
    "map-view.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

