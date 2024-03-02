import { PageHolder } from "./page-holder";

export abstract class AppPage extends PageHolder {
  /**
   * Path to the page can be relative to the baseUrl defined in playwright.config.ts
   * or absolute (on your own risk)
   */
  public abstract pagePath: string;

  /**
   * Opens the page in the browser and expectLoaded should pass
   */
  async open(path?: string) {
    await this.page.goto(path ?? this.pagePath);
    await this.expectLoaded();
  }
}
