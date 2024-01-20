import { Plugins } from 'eco.js';
import { CommandGroupsController } from './CommandGroupsController.mjs';

export class ElixrPlugin extends Plugins.BasePlugin {
  Name = 'ElixrPlugin';
  public async getRecipes() {
    return this.http.GET<Map<string, EMRecipe>, Omit<EMRecipe, 'Name'>[]>(
      '/elixr-mods/framework/api/v1/get-recipes',
      (_, dataRaw) => {
        return new Map(
          Object.keys(dataRaw).map((itemName) => {
            return [
              itemName,
              { Name: itemName, ...Reflect.get(dataRaw, itemName) } as EMRecipe,
            ];
          }),
        );
      },
    );
  }
  public async apiCheck() {
    return this.http.GET<string, string>('/elixr-mods/framework/api/v1');
  }
  public CommandGroups: CommandGroupsController = new CommandGroupsController(
    this.client,
  );
}
