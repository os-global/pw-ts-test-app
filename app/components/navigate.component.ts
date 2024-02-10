import { BaseComponent } from "./base.component";

export class NavigationComponent extends BaseComponent {
    
    async openMenuItem(itemName: string) {
        await this.page.getByRole('link', { name: `${itemName}` }).click();
    }
}