import { test, expect } from '@playwright/test';

const url = `${process.env.TEST_URL ?? 'http://localhost:5173'}?disable_analytics=true`;

test.beforeEach(async ({ page }, testInfo) => {
  page.on('console', (msg) => {
    console.log(msg);
  });
  await page.exposeBinding('chrome', () => true);
  testInfo.snapshotSuffix = "";
  test.setTimeout(180000)
});

test('has editor', async ({ page }) => {
  await page.goto(url);

  const startButton = page.locator("button:text(\"START\")");
  await startButton.waitFor({ timeout: 60000 });
  await startButton.click();

  const nextButton = page.locator("button:text(\"NEXT\")");
  await nextButton.waitFor({ timeout: 60000 });

  const editor = page.getByTestId("editor-panel")
  await editor.waitFor({ timeout: 60000 });
  expect(await editor.screenshot()).toMatchSnapshot(
    "editor.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

test('has map view', async ({ page }) => {
  await page.goto(url);

  const startButton = page.locator("button:text(\"START\")");
  await startButton.waitFor({ timeout: 60000 });
  await startButton.click();

  const root = page.frameLocator('#console').getByText("No logs").first();
  await root.waitFor({ timeout: 60000 });

  await page.waitForTimeout(2000);

  const updatedMap = page.locator('#console');
  expect(await updatedMap.screenshot()).toMatchSnapshot(
    "map-view.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

