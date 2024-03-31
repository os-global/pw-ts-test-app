import { test } from "../../src/fixtures";


test("verify stats on dashboard", async ({
  defaultUserApp: { dashboard },
  mockStats,
}) => {
  await dashboard.open();
  await dashboard.verifyStats(mockStats.total, mockStats.passed, mockStats.failed, mockStats.norun);
});
