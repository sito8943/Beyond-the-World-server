// @ts-check

const Entity = require("./Entity");
const { Price, ProductionType } = require("./Currency");

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
   * @param {Price} price
   * @param {BuildingType} type
   * @param {ProductionType} production
   * @param {string[]} req
   */
  constructor(id, name, price, type, production, req) {
    super(id, name, req);
    this.price = price;
    this.currentPrice = new Price(price.Currency, price.Count);
    this.type = type;
    this.production = production;
  }
}

module.exports = {
  Building,
};
