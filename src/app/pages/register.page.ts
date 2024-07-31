import { expect } from "@playwright/test";
import { AppPage } from "../core/app.page";
import { User } from "src/models/user.model";

export class RegisterPage extends AppPage {
  private readonly usernameInput = this.page.getByLabel("Username");
  private readonly emailInput = this.page.getByLabel("Email address");
  private readonly passwordInput = this.page.getByLabel("Password:");
  private readonly passwordConfirmationInput = this.page.getByLabel(
    "Password confirmation"
  );
  private readonly loginButton = this.page.getByRole("link", {
    name: "Login",
  });
  private readonly registerButton = this.page.getByRole("button", {
    name: "Register",
  });

  public pagePath = "/register";

  async expectLoaded(message = "Expect Login page to be loaded") {
    await expect(this.passwordConfirmationInput, message).toBeVisible();
  }

  async navigate() {
    await this.page.goto(this.pagePath);
  }

  async registerUser(user: User) {
    await this.usernameInput.fill(user.username);
    await this.emailInput.fill(user.email ? user.email : "");
    await this.passwordInput.fill(user.password);
    await this.passwordConfirmationInput.fill(user.password);
    await this.registerButton.click();
  }
}
