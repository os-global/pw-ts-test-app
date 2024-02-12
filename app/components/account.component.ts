import { BaseComponent } from "../core/base.component";

export class AccountComponent extends BaseComponent {
  private readonly logOutButton = this.locator.locator(".logOut");

  async logOut() {
    await this.logOutButton.click();
  }
}
