import { test } from "../../src/fixtures";

test("verify dashboard stats", async ({
  defaultUserApp: { dashboard },
  mockStats,
}) => {
  await dashboard.open();
  await dashboard.verifyStats(
    mockStats.total,
    mockStats.passed,
    mockStats.failed,
    mockStats.norun
  );
});

test("verify rating stats", async ({
  defaultUserApp: { rating },
  mockRating,
}) => {
  await rating.open();
  await rating.verifyAuthorsRating(
    mockRating.top_1_author.name,
    mockRating.top_1_author.test_case_count,
    mockRating.top_2_author.name,
    mockRating.top_2_author.test_case_count,
    mockRating.top_3_author.name,
    mockRating.top_3_author.test_case_count
  );
});
