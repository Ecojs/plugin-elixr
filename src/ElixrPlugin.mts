import { Plugins } from 'eco.js';

/**
 * Plugin for interfacing with Elixr Framework
 */
export class ElixrPlugin extends Plugins.BasePlugin {
  Name = 'ElixrPlugin';
  /**
   * Get all recipes on the server.
   */
  public async getRecipes() {
    return this.http.GET<Map<string, EMRecipe>, Omit<EMRecipe, 'Name'>[]>(
      '/elixr-mods/framework/api/v1/get-recipes',
      (_, dataRaw) => {
        return new Map(
          Object.keys(dataRaw).map((itemName) => {
            return [
              itemName,
              { Name: itemName, ...Reflect.get(dataRaw, itemName) },
            ];
          }),
        );
      },
    );
  }
  /**
   * Check if the api is alive.
   */
  public async apiCheck() {
    return this.http.GET<string, string>('/elixr-mods/framework/api/v1');
  }
}
