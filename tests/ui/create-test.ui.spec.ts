import { test } from "../../src/fixtures";

const testCases = [
  {
    id: "description is optional",
    description: "",
  },
  {
    id: "long description",
    description: "Way too long".repeat(100),
  },
  {
    id: "multipline description",
    description: "First line\nSecond line\nThird line",
  },
];
for (const {id, description} of testCases) {
  test(
    id,
    { tag: ["@ui"] },
    async ({ newUserApp: { dashboard, navigate, newTest, testCases }, newUser }) => {
      await dashboard.open();
      await navigate.openMenuItem("Create new test");
      const name = `Test with ${newUser.username} user`;
      await newTest.create(name,description);
      await navigate.openMenuItem("Test Cases");
      await testCases.verifyTestExists(name);
    }
  );
}

test("test name is mandatory", async ({ defaultUserApp: { newTest } }) => {
  await newTest.open();
  await newTest.create("", "Test description default");
  await newTest.verifyTestNameInputHasEmptyValueValidationMessage();
});
