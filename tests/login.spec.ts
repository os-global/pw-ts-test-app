import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test('login/logout test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('default', 'QADqwerty');

  const dashboardPage = new DashboardPage(page);
  await expect(dashboardPage.logoutButton).toBeVisible();

  await dashboardPage.logoutButton.click();
  await expect(loginPage.loginButton).toBeVisible();
});

test('user cannot login with wrong credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('default', 'wrong password');

  const dashboardPage = new DashboardPage(page);
  await expect(dashboardPage.logoutButton).toBeHidden();
  await expect(loginPage.credsErrorMessage).toBeVisible();
});