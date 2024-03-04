import { test as base } from "./api.fixtures";

type Fixtures = {
  createdTest: number;
};

export const test = base.extend<Fixtures>({
  createdTest: async ({ apiDefaultUser }, use) => {
    const newTest = await apiDefaultUser.test.create({
      name: "Test 1",
      description: "Test description",
    });
    console.log(`newTest: ${newTest.test_id}`);
    await use(newTest.test_id);
    // teardown
    await apiDefaultUser.test.delete(newTest.test_id);
  },
});
