import { expect } from "@playwright/test";
import { AppPage } from "../../core/app.page";

export class TestCasesPage extends AppPage {
  private readonly createNewTestButton = this.page.getByRole("button", {
    name: "Create new test",
  });

  public pagePath = "/tests";

  async expectLoaded(message = "Expect 'Test Cases' page to be loaded") {
    await expect(this.createNewTestButton, message).toBeVisible();
  }

  async openCreateNewTestPage() {
    await this.createNewTestButton.click();
  }
}
