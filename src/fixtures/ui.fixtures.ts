import { App } from "../app";
import { test as base } from "@playwright/test";

type Fixtures = {
    app: App;
    defaultUserApp: App;
}

export const test = base.extend<Fixtures>({
    app: async ({ page }, use) => {
        const app = new App(page);
        await use(app);
        // teardown
    },
    defaultUserApp: async ({ page }, use) => {
        const defaultUserApp = new App(page);
        await defaultUserApp.login.silentLogin("default", "QADqwerty");
        await use(defaultUserApp);
        // teardown
    }
});