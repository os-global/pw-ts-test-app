import { expect } from "@playwright/test";
import { AppPage } from "../../core/app.page";

export class CreateNewTestPage extends AppPage {
  private readonly testNameInput = this.page.locator("#id_name");
  private readonly testDesciptionInput = this.page.getByLabel("Test description");
  private readonly createButton = this.page.getByRole("button", { name: "Create" });

  public pagePath: string = "/test/new";

  async expectLoaded(message = "Expect 'Create new Test' page to be loaded") {
    await expect(this.testNameInput, message).toBeVisible();
  }

  async create(testName: string, testDescription: string) {
    await this.testNameInput.fill(testName);
    await this.testDesciptionInput.fill(testDescription);
    await this.createButton.click();
  }
}
