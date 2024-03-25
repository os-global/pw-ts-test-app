import { test as base } from "@playwright/test";
import { randomUUID } from "node:crypto";
import { User } from "../models/user.model";

export type TestOptions = {
  defaultUser: User;
  secondaryUser: User;
  newUserGeneratedCreds: User;
};

export const test = base.extend<TestOptions>({
  defaultUser: [
    {
      username: `${process.env.DEFAULT_USER_USERNAME}`,
      password: `${process.env.DEFAULT_USER_PASSWORD}`,
    },
    { option: true },
  ],
  secondaryUser: [
    {
      username: `${process.env.SECONDARY_USER_USERNAME}`,
      password: `${process.env.SECONDARY_USER_PASSWORD}`,
    },
    { option: true },
  ],
  newUserGeneratedCreds: [
    {
      username: `${randomUUID().split("-")[0]}`,
      password: "AQAqwerty",
      email: `${randomUUID().split("-")[0]}@dsfnsdjkfnib.com`,
    },
    { option: true },
  ],
});
