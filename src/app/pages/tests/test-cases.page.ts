import { expect } from "@playwright/test";
import { AppPage } from "../../core/app.page";
import { step } from "../../../misc/reporters/step";
import { TestCaseRowComponent } from "./test-case-row.component";

export class TestCasesPage extends AppPage {
  private readonly downloadTestsButton = this.page.getByRole("button", {
    name: "Download tests",
  });
  private readonly uploadTestsButton = this.page.getByRole("link", {
    name: "Upload tests",
  });
  private readonly testsHeaderCount = this.page.locator(".tableTitle span");
  private readonly row = this.page.locator("tdbody tr");

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

  @step()
  async uploadTests(filePath: string) {
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.uploadTestsButton.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
  }

  @step()
  async verifyTestExists(name: string) {
    const testRow = this.testCaseRow(name);
    await testRow.isLoaded();
  }

  testCaseRow(name: string): TestCaseRowComponent {
    const testRow = this.row.filter({ hasText: name });
    return new TestCaseRowComponent(testRow);
  }
}
