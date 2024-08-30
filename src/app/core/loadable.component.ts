import { step } from "src/misc/reporters/step";

export abstract class LoadableComponent {
  abstract expectLoaded(message?: string): Promise<void>;

  @step()
  async isLoaded(): Promise<boolean> {
    try {
      await this.expectLoaded();
      return true;
    } catch {
      return false;
    }
  }
}
