import { BaseComponent } from "../core/base.component";

export class NavigationComponent extends BaseComponent {
    
    async openMenuItem(itemName: string) {
        await this.locator.getByRole('link', { name: `${itemName}` }).click();
    }
}