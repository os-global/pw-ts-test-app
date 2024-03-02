import { APIRequestContext } from "@playwright/test";

export abstract class BaseController {
  constructor(protected api: APIRequestContext, protected token?: string) {}
}
