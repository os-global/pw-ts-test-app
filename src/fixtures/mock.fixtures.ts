import { test as base } from "./ui.fixtures";

type MockStats = {
  total: number;
  passed: number;
  failed: number;
  norun: number;
};

type MockRating = {
  top_1_author: {
    name: string;
    test_case_count: number;
  };
  top_2_author: {
    name: string;
    test_case_count: number;
  };
  top_3_author: {
    name: string;
    test_case_count: number;
  };
};

type Fixtures = {
  mockStats: MockStats;
  mockRating: MockRating;
};

export const test = base.extend<Fixtures>({
  mockStats: async ({ page }, use) => {
    const mockedResponse: MockStats = {
      total: 99,
      passed: 99,
      failed: 99,
      norun: 99,
    };
    await page.route("*/**/getstat/", async (route) => {
      await route.fulfill({ json: mockedResponse });
    });
    await use(mockedResponse);
    // teardown
  },
  mockRating: async ({ page }, use) => {
    const mockedResponse: MockRating = {
      top_1_author: {
        name: "Sam",
        test_case_count: 4012,
      },
      top_2_author: {
        name: "John",
        test_case_count: 2345,
      },
      top_3_author: {
        name: "Dave",
        test_case_count: 1530,
      },
    };
    await page.route("*/**/topauthors/", async (route) => {
      await route.fulfill({ json: mockedResponse });
    });
    await use(mockedResponse);
    // teardown
  },
});
