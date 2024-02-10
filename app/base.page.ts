import { Page } from "@playwright/test" 

export class PageHolder {
    
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}