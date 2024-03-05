import { test, expect } from "../src/fixtures";

test("login/logout test", {tag: ['@login', '@smoke']}, async ({ app, defaultUser }) => {
  await app.login.navigate();
  await app.login.login(defaultUser.username, defaultUser.password);

  expect(app.dashboard.isLoaded()).toBeTruthy();

  await app.account.logOut();
  expect(app.login.isLoaded()).toBeTruthy();
});

test("user cannot login with wrong credentials", async ({ app: {login}, defaultUser }) => {
  await login.navigate();
  await login.login(defaultUser.username, "wrong password");

  expect(login.expectCredsErrorMessage);
});

test("silent login test", async ({ app, defaultUser }) => { 
  await app.login.silentLogin(defaultUser.username, defaultUser.password);
  await app.dashboard.open();
  
  expect(app.dashboard.isLoaded()).toBeTruthy();
});
