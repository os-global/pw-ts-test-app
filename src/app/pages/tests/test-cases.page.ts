import { expect } from "@playwright/test";
import { AppPage } from "../../core/app.page";
import { step } from "../../../misc/reporters/step";

export class TestCasesPage extends AppPage {
  private readonly downloadTestsButton = this.page.getByRole("button", {
    name: "Download tests",
  });
  private readonly testsHeaderCount = this.page.locator(".tableTitle span");

  public pagePath = "/tests";

  @step()
  async expectLoaded(message = "Expect 'Test Cases' page to be loaded") {
    await expect(this.downloadTestsButton, message).toBeVisible();
  }

  @step()
  async downloadTests(filePath: string) {
    const downloadPromise = this.page.waitForEvent("download");
    await this.downloadTestsButton.click();
    const download = await downloadPromise;
    await download.saveAs(filePath);
  }

  @step()
  async verifyTestsHeaderCount(testscount: number) {
    await expect(this.testsHeaderCount).toHaveText(`(Total ${testscount})`);
  }

  @step()
  async getTestsHeaderCount() {
    return parseInt((await this.testsHeaderCount.innerText()).replace(/\D/g, ""));
  }
}
