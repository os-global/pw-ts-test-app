import { User } from "../models/user.model";
import { BaseUser } from "./base.user";

const defaultUser: User = {
  username: "default",
  password: "QADqwerty",
};

export class DefaultUser extends BaseUser {
  constructor() {
    super(defaultUser);
  }
}