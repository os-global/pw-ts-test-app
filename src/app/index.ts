import { NavigationComponent } from "./components/navigate.component";
import { CreateNewTestPage } from "./pages/tests/create-new-test.page";
import { DashboardPage } from "./pages/statistic/dashboard.page";
import { LoginPage } from "./pages/login.page";
import { expect } from "@playwright/test";
import { PageHolder } from "./core/page-holder";
import { AccountComponent } from "./components/account.component";

export class App extends PageHolder {
  private readonly navigationMenu = this.page.locator(".menuBox");
  private readonly accountMenu = this.page.locator(".account");

  async expectLoaded(message = "Expect application page to be loaded") {
    expect(this.login.isLoaded() || this.navigate.isLoaded(), message);
  }

  public login = new LoginPage(this.page);
  public dashboard = new DashboardPage(this.page);
  public newTest = new CreateNewTestPage(this.page);
  public navigate = new NavigationComponent(this.navigationMenu);
  public account = new AccountComponent(this.accountMenu);
}
