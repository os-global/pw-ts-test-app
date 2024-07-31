import { NavigationComponent } from "./components/navigate.component";
import { CreateNewTestPage } from "./pages/tests/create-new-test.page";
import { DashboardPage } from "./pages/statistic/dashboard.page";
import { LoginPage } from "./pages/login.page";
import { expect } from "@playwright/test";
import { PageHolder } from "./core/page-holder";
import { AccountComponent } from "./components/account.component";
import { TestCasesPage } from "./pages/tests/test-cases.page";
import { RatingPage } from "./pages/statistic/rating.page";
import { RegisterPage } from "./pages/register.page";

export class App extends PageHolder {
  private readonly navigationMenu = this.page.locator(".menuBox");
  private readonly accountMenu = this.page.locator(".account");

  async expectLoaded(message = "Expect application page to be loaded") {
    expect(this.login.isLoaded() || this.navigate.isLoaded(), message);
  }

  public login = new LoginPage(this.page);
  public register = new RegisterPage(this.page);
  public dashboard = new DashboardPage(this.page);
  public rating = new RatingPage(this.page);
  public testCases = new TestCasesPage(this.page);
  public newTest = new CreateNewTestPage(this.page);
  public navigate = new NavigationComponent(this.page, this.navigationMenu);
  public account = new AccountComponent(this.accountMenu);
}
