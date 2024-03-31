import { mergeTests } from "@playwright/test";
import { test as apiFixtures } from "./api.fixtures";
import { test as uiFixtures } from "./ui.fixtures";
import { test as testFixtures } from "./test.fixtures";
import { test as mockFixtures } from "./mock.fixtures";

export const test = mergeTests(uiFixtures, apiFixtures, testFixtures, mockFixtures);

export { expect } from "@playwright/test";