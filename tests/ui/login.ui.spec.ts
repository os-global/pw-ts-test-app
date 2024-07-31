import { test, expect } from "../../src/fixtures";

test(
  "login/logout test",
  {
    tag: ["@login", "@smoke"],
    annotation: [
      {
        type: "issue",
        description: "https://github.com/microsoft/playwright/issues/23180",
      },
      {
        type: "docs",
        description: "https://playwright.dev/docs/test-annotations#tag-tests",
      },
    ],
  },
  async ({ app, defaultUser }) => {
    await app.login.navigate();
    await app.login.login(defaultUser.username, defaultUser.password);
  
    expect(app.dashboard.isLoaded()).toBeTruthy();

    await app.account.logOut();
    expect(app.login.isLoaded()).toBeTruthy();
  }
);

test("user cannot login with wrong credentials", async ({
  app: { login },
  defaultUser,
}) => {
  await login.navigate();
  await login.login(defaultUser.username, "wrong password");

  expect(login.expectCredsErrorMessage);
});

test("silent login test", async ({ app, defaultUser }) => {
  await app.login.silentLogin(defaultUser.username, defaultUser.password);
  await app.dashboard.open();

  expect(app.dashboard.isLoaded()).toBeTruthy();
});

test("user can create new account", async ({ app, newUserGeneratedCreds, deleteLoggedInUser }) => {
  await app.login.navigate();
  await app.login.clickCreateAccount();
  await app.register.expectLoaded();
  console.log(newUserGeneratedCreds);
  await app.register.registerUser(newUserGeneratedCreds);
  expect(app.dashboard.isLoaded()).toBeTruthy();
});