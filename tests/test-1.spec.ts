import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000');
  await page.getByLabel('Username:').fill('default');
  await page.getByLabel('Password:').fill('QADqwerty');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
});