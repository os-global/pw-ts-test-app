import { test as base } from "@playwright/test";
import { randomUUID } from "node:crypto";

type PredefinedUsers = {
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

export const test = base.extend<PredefinedUsers>({
  defaultUser: [
    {
      username: "default",
      password: "QADqwerty",
    },
    { option: true },
  ],
  secondaryUser: [
    {
      username: "secondary",
      password: "QASqwerty",
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
