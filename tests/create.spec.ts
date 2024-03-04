import { test } from "../src/fixtures";

test("create test", async ({ api, createdTest }) => {
  // await defaultUserApp.dashboard.open();
  // await defaultUserApp.navigate.openMenuItem("Create new test");
  // await defaultUserApp.newTest.create("Test 1", "Test description");
  // await defaultUserApp.navigate.openMenuItem("Test Cases");
  // await apiDefault.auth.login(user);
  const newTest = await api.test.get(createdTest);
  console.log(newTest);
  // await apiDefault.test.create({ name: "Test 1", description: "Test description" });
});
