import { NavigationComponent } from "./components/navigate.component";
import { BasePage } from "./pages/base.page";
import { CreateNewTestPage } from "./pages/create-new-test.page";
import { DashboardPage } from "./pages/dashboard.page";
import { LoginPage } from "./pages/login.page";

export class App extends BasePage {

    public login = new LoginPage(this.page);
    public dashboard = new DashboardPage(this.page);
    public newTest = new CreateNewTestPage(this.page);
    public navigate = new NavigationComponent(this.page);
}
