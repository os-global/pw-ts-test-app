import { test } from "../../src/fixtures";


test("verify rating stats", async ({
  defaultUserApp: { rating },
  mockRating,
}) => {
  await rating.open();
  await rating.verifyStats(mockRating.total, mockStats.passed, mockStats.failed, mockStats.norun);
});
