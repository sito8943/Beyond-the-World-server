// @ts-check

const Entity = require("./Entity");
const { ProductionType } = require("./Currency");

class BuildingType {
  /**
   *
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }
}

class Building extends Entity {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {object} price
   * @param {BuildingType} type
   * @param {ProductionType} production
   * @param {string[]} req
   */
  constructor(id, name, price, type, production, req) {
    super(id, name, price, req);
    this.currentPrice = { ...price };
    this.type = type;
    this.production = production;
  }
}

module.exports = {
  Building,
};
