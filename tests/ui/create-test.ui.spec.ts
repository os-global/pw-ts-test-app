import { expect, test } from "../../src/fixtures";

test("create test", { tag: ["@ui", "@smoke"] }, async ({ defaultUserApp }) => {
  await defaultUserApp.dashboard.open();
  await defaultUserApp.navigate.openMenuItem("Create new test");
  await defaultUserApp.newTest.create(
    "Test default",
    "Test description default"
  );
  await defaultUserApp.navigate.openMenuItem("Test Cases");
});

test(
  "new user create test",
  { tag: ["@ui"] },
  async ({ newUserApp: { dashboard, navigate, newTest }, newUser }) => {
    await dashboard.open();
    await navigate.openMenuItem("Create new test");
    await newTest.create(
      `Test with ${newUser.username} user`,
      `Test description from new user with email ${newUser.email}`
    );
    await navigate.openMenuItem("Test Cases");
  }
);

test("test name is mandatory", async ({ defaultUserApp: {newTest} }) => {
  await newTest.open();
  await newTest.create("", "Test description default");
  //TODO: add assertion
});
