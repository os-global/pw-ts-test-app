import { APIRequestContext } from "@playwright/test";
import { TestController } from "./controller/test.controller";
import { UserController as AuthController } from "./controller/user.controller";
import { User } from "../models/user.model";

export class ApiClient {
  public readonly test: TestController;
  public readonly auth: AuthController;

  constructor(
    context: APIRequestContext,
    private token?: string,
    private account?: User
  ) {
    this.test = new TestController(context, this.token);
    this.auth = new AuthController(context, this.token);
  }

  static unauthenticated(api: APIRequestContext): ApiClient {
    return new ApiClient(api);
  }

  static async authenticated(
    context: APIRequestContext,
    user: User
  ): Promise<ApiClient> {
    return new ApiClient(
      context,
      await this.unauthenticated(context).auth.login(user),
      user
    );
  }
}
