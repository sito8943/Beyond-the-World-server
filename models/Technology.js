// @ts-check
const { Price } = require("./Currency");
const Entity = require("./Entity");

class Technology extends Entity {
  /**
   * @param {string} id
   * @param {string} name
   * @param {object} price
   * @param {string[]} req
   */
  constructor(id, name, price, req) {
    super(id, name, price, req);
    this.currentPrice = { ...price };
    this.id = id;
    this.name = name;
    this.req = req;
  }

  /**
   *
   * @param {object} options
   */
  createTechnology(options = { id: "", name: "", price: {}, req: [] }) {
    const { id, name, price, req } = options;
    this.id = id;
    this.name = name;
    this.price = price;
    this.currentPrice = { ...price };
    this.req = req;
  }
}

module.exports = Technology;
