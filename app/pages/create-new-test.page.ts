import { BasePage } from "./base.page";

export class CreateNewTestPage extends BasePage {

    readonly testNameInput = this.page.locator('#id_name')
    readonly testDesciptionInput = this.page.getByLabel('Test description')
    readonly createButton = this.page.getByRole('button', { name: 'Create' })

    async create(testName: string, testDescription: string) {
        await this.testNameInput.fill(testName);
        await this.testDesciptionInput.fill(testDescription);
        await this.createButton.click();
    }
}