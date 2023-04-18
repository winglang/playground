import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  testInfo.snapshotSuffix = "";
  test.setTimeout(180000)
});

test('has editor', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const editor = await page.getByRole("code");
  await editor.waitFor({ timeout: 20000 });

  expect(await editor.screenshot()).toMatchSnapshot(
    "editor.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});

test('has map view', async ({ page }) => {
  await page.goto('http://localhost:5173');
  page.on('console', (msg) => {
    console.log(msg);
  });
  const mapView = await page.frameLocator('#console').getByTestId("map-view");
  await mapView.waitFor({ timeout: 60000 });

  const root = await page.frameLocator('#console').getByText("root").first();
  await root.waitFor({ timeout: 60000 });

  const updatedMap = await page.frameLocator('#console').getByTestId("map-view");
  expect(await updatedMap.screenshot()).toMatchSnapshot(
    "map-view.png",
    {
      maxDiffPixelRatio: 0.3,
    },
  );
});
