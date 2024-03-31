import { expect } from "@playwright/test";
import { AppPage } from "../../core/app.page";
import { step } from "../../../misc/reporters/step";

export class DashboardPage extends AppPage {
  private readonly noRunNumber = this.page.locator(".noRun span");
  private readonly passedNumber = this.page.locator(".passed span");
  private readonly failedNumber = this.page.locator(".failed span");
  private readonly totalNumber = this.page.locator(".total span");
  private readonly refreshStatsButton = this.page.getByRole("button", {
    name: "Refresh Stats",
  });

  public pagePath = "/";

  @step("Verify 'Dashboard' page opened")
  async expectLoaded(message = "Expect 'Dashboard' page to be loaded") {
    await expect(this.refreshStatsButton, message).toBeVisible();
  }

  @step("Verify stats numbers")
  async verifyStats(total: number, passed: number, failed: number, norun: number) {
    await expect(this.noRunNumber).toHaveText(`${norun}`);
    await expect(this.passedNumber).toHaveText(`${passed}`);
    await expect(this.failedNumber).toHaveText(`${failed}`);
    await expect(this.totalNumber).toHaveText(`${total}`);
  }
}
