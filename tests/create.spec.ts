import { App } from "../app";
import { test } from "@playwright/test";

test('create test', async ( { page } ) => {
    const app = new App(page);
    await app.login.navigate();
    await app.login.login('default', 'QADqwerty');
    await app.navigate.openMenuItem('Create new test');
    await app.newTest.create('Test 1', 'Test description');
})