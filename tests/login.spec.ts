import { test, expect } from '@playwright/test';

test('login/logout test', async ({ page }) => {
  await page.goto('http://localhost:8000');
  await page.getByLabel('Username:').fill('default');
  await page.getByLabel('Password:').fill('QADqwerty');
  const loginButton = page.getByRole('button', { name: 'Login' })
  await loginButton.click();
  const logout = page.locator('.logOut');
  await expect(logout).toBeVisible();
  await page.locator('.logOut').click();
  await expect(loginButton).toBeVisible();
});

test('user cannot login with wrong credentials', async ({ page }) => {
  await page.goto('http://localhost:8000');
  await page.getByLabel('Username:').fill('default');
  await page.getByLabel('Password:').fill('wrong password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.logOut')).toBeHidden();
  await expect(page.getByText("Your username and password didn't match. Please try again.")).toBeVisible();
});