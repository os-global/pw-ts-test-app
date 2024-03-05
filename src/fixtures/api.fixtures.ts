import { test as base } from "./test.options";
import { ApiClient } from "../api";

type Fixtures = {
  api: ApiClient;
  apiDefaultUser: ApiClient;
  createdTest: number;
};

export const test = base.extend<Fixtures>({
  api: async ({ request }, use) => {
    const api = ApiClient.unauthenticated(request);
    await use(api);
    // teardown
  },
  apiDefaultUser: async ({ request, defaultUser }, use) => {
    const api = await ApiClient.authenticated(request, {
      username: `${defaultUser.username}`,
      password: `${defaultUser.password}`,
    });
    await use(api);
    // teardown
  },
  createdTest: async ({ playwright }, use) => {
    const api = await ApiClient.authenticated(await playwright.request.newContext(), {
      username: "default",
      password: "QADqwerty",
    });
    const newTest = await api.test.create({
      name: "Test 1",
      description: "Test description",
    });
    console.log(`newTest: ${newTest.test_id}`);
    await use(newTest.test_id);
    // teardown
    await api.test.delete(newTest.test_id);
  },
});
