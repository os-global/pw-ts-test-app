import { expect } from "@playwright/test";
import { User } from "../../models/user.model";
import { BaseController } from "./base.controller";

export class UserController extends BaseController {
  async createUser(user: User) {
    // todo: implement endpoint
    console.log(
      `implement this.api.post('/createUser', { data: { ${user.username}, ${user.password} } });`
    );
  }

  async login(user: User): Promise<string> {
    const response = await this.api.post("/api/auth/login", {
      data: { username: user.username, password: user.password },
    });
    expect(response.status()).toBe(200);
    const body = await response.body();
    console.log(body);
    const token: string = (await this.api.storageState()).cookies.find(
      (cookie) => cookie.name === "csrftoken"
    )?.value as string;
    console.log(token);
    expect(token, "Token should not be empty").not.toEqual("");
    this.token = token;
    // this.headers = { ...this.headers, "X-CSRFToken": `${token}` };
    // const response2 = await this.api.get("/api/auth/token");
    // const token2 = await response2.text();
    console.log(token);
    return token;
  }
}
