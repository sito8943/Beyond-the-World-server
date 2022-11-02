// @ts-check

class User {
  /**
   *
   * @param {string} id
   * @param {string} user
   * @param {string} nick
   * @param {string} email
   * @param {string} password
   * @param {string} nation
   * @param {number[]} resources
   * @param {string[]} buildings
   * @param {string[]} units
   * @param {string[]} heros
   */
  constructor(
    id,
    user,
    nick,
    email,
    password,
    nation,
    resources,
    buildings,
    units,
    heros
  ) {
    this.id = id;
    this.user = user;
    this.nick = nick;
    this.email = email;
    this.password = password;
    this.nation = nation;
    this.resources = resources;
    this.buildings = buildings;
    this.units = units;
    this.heros = heros;
  }
}

module.exports = User;
