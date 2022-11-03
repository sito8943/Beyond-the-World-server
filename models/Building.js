// @ts-check

const Entity = require("./Entity");
const Currency = require("./Currency");
class ProductionType {
  /**
   *
   * @param {Currency} currency
   * @param {number} count
   */
  constructor(currency, count) {
    this.currency = currency;
    this.count = count;
    this.currentCount = count;
  }

  get Currency() {
    return this.Currency;
  }

  get Count() {
    return this.count;
  }

  get CurrentCount() {
    return this.currentCount;
  }

  set CurrentCount(newCount) {
    this.currentCount = newCount;
  }
}

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
   * @param {number} creationTime
   * @param {string[]} req
   */
  constructor(id, name, price, type, production, creationTime, req) {
    super(id, name, price, creationTime, req);
    this.currentPrice = { ...price };
    this.type = type;
    this.production = production;
  }
}

module.exports = {
  Building,
  ProductionType,
};
