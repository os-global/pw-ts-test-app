import { expect } from "@playwright/test";
import { AppPage } from "../core/app.page";

export class LoginPage extends AppPage {
  private readonly usernameInput = this.page.getByLabel("Username");
  private readonly passwordInput = this.page.getByLabel("Password");
  private readonly loginButton = this.page.getByRole("button", {
    name: "Login",
  });
  private readonly credsErrorMessage = this.page.getByText(
    "Your username and password didn't match. Please try again."
  );

  public pagePath = "/login";

  async expectLoaded(message = "Expect Login page to be loaded") {
    await expect(this.usernameInput, message).toBeVisible();
  }

  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectCredsErrorMessage() {
    await expect(this.credsErrorMessage).toBeVisible();
  }

  async silentLogin(username: string, password: string) {
    await this.page.request.post("/api/auth/login", {data: {"username": username, "password": password}});
  }
}
