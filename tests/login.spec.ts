import { test, expect } from "../src/fixtures";

test("login/logout test", async ({ app }) => {
  await app.login.navigate();
  await app.login.login("default", "QADqwerty");

  expect(app.dashboard.isLoaded()).toBeTruthy();

  await app.account.logOut();
  expect(app.login.isLoaded()).toBeTruthy();
});

test("user cannot login with wrong credentials", async ({ app }) => {
  await app.login.navigate();
  await app.login.login("default", "wrong password");

  expect(app.login.expectCredsErrorMessage);
});

test("silent login test", async ({ app }) => { 
  await app.login.silentLogin("default", "QADqwerty");
  await app.dashboard.open();
  
  expect(app.dashboard.isLoaded()).toBeTruthy();
});
