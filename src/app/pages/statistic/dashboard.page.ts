import { expect } from "@playwright/test";
import { AppPage } from "../../core/app.page";

export class DashboardPage extends AppPage {
  private readonly refreshStatsButton = this.page.getByRole("button", {
    name: "Refresh Stats",
  });

  public pagePath = "/";

  async expectLoaded(message = "Expect 'Dashboard' page to be loaded") {
    await expect(this.refreshStatsButton, message).toBeVisible();
  }
}
