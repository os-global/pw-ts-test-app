import { User } from "../models/user.model";
import { BaseUser } from "./base.user";

const secondaryUser: User = {
  username: "secondary",
  password: "QASqwerty",
};

export class DefaultUser extends BaseUser {
  constructor() {
    super(secondaryUser);
  }
}
