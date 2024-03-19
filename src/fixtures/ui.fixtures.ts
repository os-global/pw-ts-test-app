import { ApiClient } from "../api";
import { App } from "../app";
import { test as base } from "./test.options";

type Fixtures = {
    app: App;
    defaultUserApp: App;
    newUserApp: App;
}

export const test = base.extend<Fixtures>({
    app: async ({ page }, use) => {
        const app = new App(page);
        await use(app);
        // teardown
    },
    defaultUserApp: async ({ page, defaultUser }, use) => {
        const defaultUserApp = new App(page);
        await defaultUserApp.login.silentLogin(defaultUser.username, defaultUser.password);
        await use(defaultUserApp);
        // teardown
    },
    newUserApp: async ({ page, newUser, request}, use) => {
        const newUserApp = new App(page);
        await newUserApp.login.silentLogin(newUser.username, newUser.password);
        await use(newUserApp);
        // teardown
        const api = ApiClient.authenticated(request, newUser);
        await api.user.delete();
    }
});