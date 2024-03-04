import { mergeTests } from "@playwright/test";
import { test as apiFixtures } from "./api.fixtures";
import { test as uiFixtures } from "./ui.fixtures";
import { test as testFixtures } from "./test.fixtures";

export const test = mergeTests(uiFixtures, apiFixtures, testFixtures);

export { expect } from "@playwright/test";