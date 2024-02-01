import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    
    readonly usernameInput = this.page.getByLabel('Username');
    readonly passwordInput = this.page.getByLabel('Password');
    readonly loginButton = this.page.getByRole('button', { name: 'Login' });
    readonly credsErrorMessage = this.page.getByText("Your username and password didn't match. Please try again.");

    async navigate() {
        await this.page.goto('http://localhost:8000');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}