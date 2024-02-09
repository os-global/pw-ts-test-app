import { BasePage } from "./pages/base.page";
import { DashboardPage } from "./pages/dashboard.page";
import { LoginPage } from "./pages/login.page";

export class App extends BasePage {

    public login = new LoginPage(this.page);
    public dashboard = new DashboardPage(this.page);
}
