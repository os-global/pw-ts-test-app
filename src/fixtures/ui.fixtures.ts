import { App } from "../app";
import { test as base } from "./api.fixtures";

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
    newUserApp: async ({ page, newUser}, use) => {
        const newUserApp = new App(page);
        await newUserApp.login.silentLogin(newUser.username, newUser.password);
        await use(newUserApp);
        // teardown
    }
});