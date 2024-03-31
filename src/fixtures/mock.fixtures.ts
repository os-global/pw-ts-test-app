import { test as base } from "./ui.fixtures";

type MockStats = {
    total: number;
    passed: number;
    failed: number;
    norun: number;
}

type Fixtures = {
    mockStats: MockStats;
}

export const test = base.extend<Fixtures>({
    mockStats: async ({ page }, use) => {
        const mockedResponse: MockStats = {"total": 99, "passed": 99, "failed": 99, "norun": 99};
        await page.route('*/**/getstat/', async route => {
            await route.fulfill({ json: mockedResponse });
          });
        await use(mockedResponse);
        // teardown
    }
});