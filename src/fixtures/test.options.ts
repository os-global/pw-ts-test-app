import { test as base } from "@playwright/test";
import { randomUUID } from "node:crypto";

export type TestOptions = {
  defaultUser: {
    username: string;
    password: string;
  };
  secondaryUser: {
    username: string;
    password: string;
  };
  newUser: {
    username: string;
    password: string;
    email: string;
  };
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
  newUser: [
    {
      username: `${randomUUID().split("-")[0]}`,
      password: "AQAqwerty",
      email: `${randomUUID().split("-")[0]}@dsfnsdjkfnib.com`,
    },
    { option: true },
  ],
});
