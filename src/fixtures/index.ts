import { mergeTests } from "@playwright/test";
import { test as apiFixtures } from "./api.fixtures";
import { test as uiFixtures } from "./ui.fixtures";

export const test = mergeTests(uiFixtures, apiFixtures);

export { expect } from "@playwright/test";