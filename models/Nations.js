// @ts-check
const Currency = require("./Currency");
const Building = require("./Building");
const Technology = require("./Technology");
const Unit = require("./Units");
const Hero = require("./Heros");

class Nation {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {Currency[]} currencies
   * @param {Building[]} buildings
   * @param {Unit[]} units
   * @param {Technology[]} technologies
   * @param {Hero[]} heros
   */
  constructor(id, name, currencies, buildings, units, technologies, heros) {
    this.id = id;
    this.name = name;
    this.currencies = currencies;
    this.buildings = buildings;
    this.units = units;
    this.technologies = technologies;
    this.heros = heros;
  }

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }

  get Currencies() {
    return this.currencies;
  }

  get Building() {
    return this.buildings;
  }

  get Units() {
    return this.units;
  }

  get Technologies() {
    return this.technologies;
  }

  get Heros() {
    return this.heros;
  }
}

export default Nation;
