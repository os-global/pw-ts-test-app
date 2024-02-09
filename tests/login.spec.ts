import { test, expect } from '@playwright/test';
import { App } from '../app';

test('login/logout test', async ({ page }) => {
  const app = new App(page);
  await app.login.navigate();
  await app.login.login('default', 'QADqwerty');

  await expect(app.dashboard.logoutButton).toBeVisible();

  await app.dashboard.logoutButton.click();
  await expect(app.login.loginButton).toBeVisible();
});

test('user cannot login with wrong credentials', async ({ page }) => {
  const app = new App(page);
  await app.login.navigate();
  await app.login.login('default', 'wrong password');

  await expect(app.dashboard.logoutButton).toBeHidden();
  await expect(app.login.credsErrorMessage).toBeVisible();
});