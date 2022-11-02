// @ts-check

class User {
  /**
   *
   * @param {*} id
   * @param {*} user
   * @param {*} nick
   * @param {*} email
   * @param {*} password
   * @param {*} nation
   * @param {*} building
   * @param {*} units
   * @param {*} heros
   */
  constructor(id, user, nick, email, password, nation, building, units, heros) {
    this.id = id;
    this.user = user;
    this.nick = nick;
    this.email = email;
    this.password = password;
    this.nation = nation;
    this.building = building;
    this.units = units;
    this.heros = heros;
  }
}

module.exports = User;
