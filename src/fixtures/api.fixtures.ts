import { test as base } from "./test.options";
import { ApiClient } from "../api";
import { User } from "../models/user.model";

type Fixtures = {
  api: ApiClient;
  apiDefaultUser: ApiClient;
  newUser: User;
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
  newUser: async ({ request, newUserGeneratedCreds }, use) => {
    const api = ApiClient.unauthenticated(request);
    const newUserGeneratedResponse = await api.user.create(
      newUserGeneratedCreds
    );
    const userId = newUserGeneratedResponse.id;
    newUserGeneratedCreds.id = userId;
    await use(newUserGeneratedCreds);
    // teardown
    await api.user.delete(userId);
  },
});
