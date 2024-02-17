import { Page } from "@playwright/test" 
import { LoadableComponent } from "./loadable.component";

export abstract class PageHolder extends LoadableComponent {
    
    protected readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
    }
}