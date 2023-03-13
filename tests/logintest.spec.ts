import { test, expect} from '@playwright/test';


test.use({ storageState: 'playwright/.auth/admin.json' });

test('admin test', async ({ page }) => {
  await page.goto('https://github.com');
  expect (await page.locator('.auth-form px-3').isVisible());
});

test.describe(() => {
  test.use({ storageState: 'playwright/.auth/user.json' });

  test('user test', async ({ page }) => {
    await page.goto('https://github.com');
    expect (await page.locator('.auth-form px-3').isVisible());
  });
});