import { ApiClient } from "../api";
import { App } from "../app";
import { User } from "../models/user.model";

export abstract class BaseUser {
  constructor(protected user: User) {
    // this.api = ApiClient.authenticated
  }
}
