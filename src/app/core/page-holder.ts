import { Locator, Page, expect } from "@playwright/test";
import { LoadableComponent } from "./loadable.component";

export abstract class PageHolder extends LoadableComponent {
  protected readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
  }

  protected async expectInputIsEmptyValidationMessage(locator: Locator) {
    await this.expectInputValidationMessage(
      locator,
      "Please fill in this field."
    );
  }

  private async expectInputValidationMessage(
    locator: Locator,
    message: string
  ) {
    const validationMessage = await locator.evaluate((element) => {
      const input = element as HTMLInputElement;
      return input.validationMessage;
    });
    expect(validationMessage).toContain(message);
  }
}
