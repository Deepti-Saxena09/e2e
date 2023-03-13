import { test as setup} from '@playwright/test';

const adminFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill('admin');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.context().storageState({ path: adminFile });
});

const userFile = 'playwright/.auth/user.json';

setup('authenticate as user', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill('user');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.context().storageState({ path: userFile });
});

