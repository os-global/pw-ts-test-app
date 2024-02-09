import { BasePage } from "./base.page";

export class DashboardPage extends BasePage {
    
    readonly logoutButton = this.page.locator('.logOut');
}