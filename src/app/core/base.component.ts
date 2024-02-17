import { expect } from "@playwright/test";
import { LocatorHolder } from "./locator-holder";

export class BaseComponent extends LocatorHolder {
    
    async expectLoaded(): Promise<void> {
        await expect(this.locator).toBeVisible();
    }
}
