import { Locator } from "@playwright/test" 
import { LoadableComponent } from "./loadable.component";

export abstract class LocatorHolder extends LoadableComponent {
    
    protected readonly locator: Locator;

    constructor(locator: Locator) {
        super();
        this.locator = locator;
    }
}