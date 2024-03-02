import { test as base } from "@playwright/test";
import { ApiClient } from "../api";

type Fixtures = {
  api: ApiClient,
  apiDefault: ApiClient,
  createdTest: number,
};

export const test = base.extend<Fixtures>({
  api: async ({ request }, use) => {
    const api = ApiClient.unauthenticated(request);
    await use(api);
    // teardown
  },
  apiDefault: async ({ request }, use) => {
    const api = await ApiClient.authenticated(request, { username: "default", password: "QADqwerty" });
    await use(api);
    // teardown
  },
  createdTest: async ({ request }, use) => {
    const api = await ApiClient.authenticated(request, { username: "default", password: "QADqwerty" });
    const newTest = await api.test.create({ name: "Test 1", description: "Test description" });
    console.log(`newTest: ${newTest.test_id}`);
    await use(newTest.test_id);
    // teardown
    await api.test.delete(newTest.test_id);
  },
});
