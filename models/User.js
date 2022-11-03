// @ts-check
const Entity = require("./Entity");

class User {
  /**
   *
   * @param {string} id
   * @param {string} user
   * @param {string} nick
   * @param {string} email
   * @param {string} password
   * @param {string} nation
   * @param {object} resources
   * @param {object} buildings
   * @param {object} technologies
   * @param {object} units
   * @param {object} heros
   */
  constructor(
    id = "",
    user = "",
    nick = "",
    email = "",
    password = "",
    nation = "",
    resources = {},
    buildings = {},
    technologies = {},
    units = {},
    heros = {}
  ) {
    this.id = id;
    this.user = user;
    this.nick = nick;
    this.email = email;
    this.password = password;
    this.nation = nation;
    this.resources = resources;
    this.buildings = buildings;
    this.technologies = technologies;
    this.units = units;
    this.heros = heros;
  }

  createUser(
    options = {
      id: "",
      user: "",
      nick: "",
      email: "",
      password: "",
      nation: "",
      resources: {},
      buildings: {},
      technologies: {},
      units: {},
      heros: {},
    }
  ) {
    const {
      id,
      user,
      nick,
      email,
      password,
      nation,
      resources,
      technologies,
      buildings,
      units,
      heros,
    } = options;
    this.id = id;
    this.user = user;
    this.nick = nick;
    this.email = email;
    this.password = password;
    this.nation = nation;
    this.resources = resources;
    this.technologies = technologies;
    this.buildings = buildings;
    this.units = units;
    this.heros = heros;
  }

  toBd() {
    return {
      id: this.id,
      user: this.user,
      nick: this.nick,
      email: this.email,
      password: this.password,
      nation: this.nation,
      resources: this.resources,
      buildings: this.buildings,
      technologies: this.technologies,
      units: this.units,
      heros: this.heros,
    };
  }

  getTechnologies() {
    const technologies = [];
    // technologies
    Object.keys(this.technologies).forEach((item) => {
      technologies.push(item);
    });
    // buildings
    Object.keys(this.buildings).forEach((item) => {
      technologies.push(item);
    });
    // units
    Object.keys(this.units).forEach((item) => {
      technologies.push(item);
    });
    // heros
    Object.keys(this.heros).forEach((item) => {
      technologies.push(item);
    });
    return technologies;
  }

  /**
   *
   * @param {Entity} technology
   * @param {number} count
   */
  canMake(technology, count = 1) {
    for (const item of Object.keys(technology.Price))
      if (this.resources[item] < technology.Price[item] * count) return false;
    return true;
  }

  /**
   *
   * @param {Entity} technology
   * @param {number} count
   */
  make(technology, count = 1) {
    // validating again
    for (const item of Object.keys(technology.Price))
      if (this.resources[item] < technology.Price[item] * count) return false;
    for (const item of Object.keys(technology.Price))
      this.resources[item] -= technology.Price[item] * count;
    return technology;
  }

  get Id() {
    return this.id;
  }

  get User() {
    return this.user;
  }

  get Nick() {
    return this.nick;
  }

  set Nick(newNick) {
    this.nick = newNick;
  }

  get Email() {
    return this.email;
  }

  set Email(newEmail) {
    this.email = newEmail;
  }

  get Password() {
    return this.password;
  }

  set Password(newPassword) {
    this.password = newPassword;
  }

  get Nation() {
    return this.nation;
  }

  get Resources() {
    return this.resources;
  }

  /**
   *
   * @param {string} resource
   * @param {number} count
   */
  modifyResource(resource, count = 0) {
    this.resources[resource] += count;
  }

  get Buildings() {
    return this.buildings;
  }

  /**
   *
   * @param {string} building
   * @param {number} count
   */
  addBuildings(building, count = 1) {
    if (!this.buildings[building]) this.buildings[building] = count;
    else this.buildings[building] += count;
  }

  /**
   *
   * @param {string} building
   * @param {number} count
   */
  removeBuildings(building, count = 1) {
    if (this.buildings[building]) this.buildings[building] -= count;
    if (this.buildings[building] < 0) this.buildings[building] = 0;
  }

  /**
   *
   * @param {string} technology
   * @param {number} level
   */
  addTechnologies(technology, level = 1) {
    if (!this.technologies[technology]) this.technologies[technology] = level;
    else this.technologies[technology] += level;
  }

  get Units() {
    return this.units;
  }

  /**
   *
   * @param {string} unit
   * @param {number} count
   */
  addUnits(unit, count = 1) {
    if (!this.units[unit]) this.units[unit] = count;
    else this.units[unit] += count;
  }

  /**
   *
   * @param {string} unit
   * @param {number} count
   */
  removeUnits(unit, count = 1) {
    if (this.units[unit]) this.units[unit] -= count;
    if (this.units[unit] < 0) this.units[unit] = 0;
  }

  get Heros() {
    return this.heros;
  }

  /**
   *
   * @param {string} hero
   * @param {number} level
   */
  addHero(hero, level = 1) {
    if (!this.heros[hero]) this.heros[hero] = level;
    else this.heros[hero] += level;
  }

  /**
   *
   * @param {string} hero
   * @param {number} level
   */
  removeHero(hero, level = 1) {
    if (this.heros[hero]) this.heros[hero] -= level;
    if (this.heros[hero] < 0) this.heros[hero] = 0;
  }
}

module.exports = User;
