import { expect } from "@playwright/test";
import { AppPage } from "../../core/app.page";
import { step } from "../../../misc/reporters/step";

export class RatingPage extends AppPage {
  private readonly top1Name = this.page.locator(".top_1_author .name");
  private readonly top1Count = this.page.locator(
    ".top_1_author .test_case_count"
  );
  private readonly top2Name = this.page.locator(".top_2_author .name");
  private readonly top2Count = this.page.locator(
    ".top_2_author .test_case_count"
  );
  private readonly top3Name = this.page.locator(".top_3_author .name");
  private readonly top3Count = this.page.locator(
    ".top_3_author .test_case_count"
  );
  private readonly refreshStatsButton = this.page.getByRole("button", {
    name: "Refresh Stats",
  });

  public pagePath = "/rating/";

  @step("Verify 'Rating' page opened")
  async expectLoaded(message = "Expect 'Rating' page to be loaded") {
    await expect(
      this.page.getByText("Statistics across top 3 authors"),
      message
    ).toBeVisible();
  }

  @step("Verify author stats")
  async verifyAuthorsRating(
    expected1Name: string,
    expected1Count: number,
    expected2Name: string,
    expected2Count: number,
    expected3Name: string,
    expected3Count: number
  ) {
    await expect(this.top1Name).toHaveText(`${expected1Name}`);
    await expect(this.top1Count).toHaveText(`${expected1Count}`);
    await expect(this.top2Name).toHaveText(`${expected2Name}`);
    await expect(this.top2Count).toHaveText(`${expected2Count}`);
    await expect(this.top3Name).toHaveText(`${expected3Name}`);
    await expect(this.top3Count).toHaveText(`${expected3Count}`);
  }
}
