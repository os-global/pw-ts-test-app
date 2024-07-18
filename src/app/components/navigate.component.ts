import { Page, Locator, expect } from "@playwright/test" 
import { BaseComponent } from "../core/base.component";
import { step } from "src/misc/reporters/step";

export class NavigationComponent extends BaseComponent {

    constructor(protected page: Page, locator: Locator) {
        super(locator);
    }
    
    @step("Open menu item")
    async openMenuItem(itemName: string) {
        await this.locator.getByRole('link', { name: `${itemName}` }).click();
    }

    @step()
    async goto(path: string) {
        await this.page.goto(path);
    }

    @step()
    async verifyUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(`${expectedUrl}`);
    }
}