import { test as base } from "./base.fixtures";
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
  createdTest: async ({ request }, use) => {
    const api = await ApiClient.authenticated(request, {
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
