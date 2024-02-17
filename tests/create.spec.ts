import { test } from "../src/fixtures";

test("create test", async ({ defaultUserApp }) => {
  await defaultUserApp.dashboard.open();
  await defaultUserApp.navigate.openMenuItem("Create new test");
  await defaultUserApp.newTest.create("Test 1", "Test description");
  await defaultUserApp.navigate.openMenuItem("Test Cases");
});
