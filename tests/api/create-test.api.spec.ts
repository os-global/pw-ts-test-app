import { test } from "../../src/fixtures";

test(
  "create test",
  { tag: ["@api", "@smoke"] },
  async ({ api, createdTest }) => {
    const newTest = await api.test.get(createdTest);
    console.log(newTest);
  }
);
