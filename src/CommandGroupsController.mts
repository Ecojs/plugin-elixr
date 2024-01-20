import type { ECO } from 'eco.js';

export class CommandGroupsController {
  constructor(private _client: ECO) {}
  /**
   * Used to Grant Permissions to a Group
   */
  grant(groupName: string, command: string) {
    return this._client.commands.exec(`grant-command ${command},${groupName}`);
  }
  /**
   * Used To Grant all Sub Commands to a group using the Parent Command
   */
  grantAll(groupName: string, command: string) {
    return this._client.commands.exec(`grant-all ${command},${groupName}`);
  }
  /**
   * Used to Remove Permissions from a Group
   */
  revoke(groupName: string, command: string) {
    return this._client.commands.exec(`revoke-command ${command},${groupName}`);
  }
  /**
   * Used to Blacklist a command for a group
   */
  blacklist(groupName: string, command: string) {
    return this._client.commands.exec(
      `blacklist-command ${command},${groupName}`,
    );
  }
  /**
   * Remove a blacklisted command from a group
   */
  removeBlacklist(groupName: string, command: string) {
    return this._client.commands.exec(
      `remove-blacklist ${command},${groupName}`,
    );
  }
}
