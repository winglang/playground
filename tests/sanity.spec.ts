import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  page.on('console', (msg) => {
    console.log(msg);
  });
  await page.exposeBinding('chrome', () => true);
  testInfo.snapshotSuffix = "";
  test.setTimeout(180000)
});

test('has editor', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const editor = await page.getByRole("code");
  await editor.waitFor({ timeout: 60000 });

  expect(await editor.screenshot()).toMatchSnapshot(
    "editor.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

test('has map view', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  const mapView = await page.locator('#console');
  await mapView.waitFor({ timeout: 60000 });

  const root = await page.frameLocator('#console').getByText("success").first();
  await root.waitFor({ timeout: 60000 });

  await page.waitForTimeout(2000);

  const updatedMap = await page.locator('#console');
  expect(await updatedMap.screenshot()).toMatchSnapshot(
    "map-view.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

test('can read code query param', async ({ page }) => {
  await page.goto('http://localhost:5173/?code=Ly8gZG9uJ3QgYnJpbmcgY2xvdWQ7');

  const editor = await page.getByRole("code");
  await editor.waitFor({ timeout: 60000 });

  const code = await page.getByText("// don't bring cloud;").first();
  await code.waitFor({ timeout: 60000 });
});
