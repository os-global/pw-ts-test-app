import { expect } from "@playwright/test";
import { User } from "../../models/user.model";
import { BaseController } from "./base.controller";

interface CreateUserRequest {
  username: string;
  password: string;
  email: string;
}

interface CreateUserResponse {
  message: string;
  id: number;
}

interface DeleteUserResponse {
  message: string;
}

export class UserController extends BaseController {
  async create(user: CreateUserRequest | User): Promise<CreateUserResponse> {
    const response = await this.api.post("/api/user/new", {
      data: user,
    })
    expect(response.status()).toBe(201);
    return response.json() as Promise<CreateUserResponse>;
  }

  async delete(userId: number): Promise<DeleteUserResponse> {
    const response = await this.api.delete(`/api/user/${userId}`);
    expect(response.status()).toBe(200);
    return response.json() satisfies Promise<DeleteUserResponse>;
  }

  async login(user: User): Promise<string> {
    const loginResponse = await this.api.post("/api/auth/login", {
      data: { username: user.username, password: user.password },
    });
    expect(loginResponse.status()).toBe(200);
    // const body = await response.body();
    // console.log(body);
    // const token: string = (await this.api.storageState()).cookies.find(
    //   (cookie) => cookie.name === "csrftoken"
    // )?.value as string;
    // console.log(token);
    // expect(token, "Token should not be empty").not.toEqual("");
    // this.token = token;
    // // this.headers = { ...this.headers, "X-CSRFToken": `${token}` };
    // // const response2 = await this.api.get("/api/auth/token");
    // // const token2 = await response2.text();
    // console.log(token);

    const tokenResponse = await this.api.get("/api/auth/token");
    const token = await tokenResponse.text();
    console.log(`Token from /api/auth/token is ${token}`);
    return token;
  }
}
