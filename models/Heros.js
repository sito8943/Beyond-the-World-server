// @ts-check
const Unit = require("./Units");
const { Price } = require("./Currency");

class Hero extends Unit {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {Price} price
   * @param {number} life
   * @param {number} speed
   * @param {number} creationTime
   * @param {string[]} req
   */
  constructor(id, name, price, life, speed, creationTime, req = []) {
    super(id, name, price, life, speed, creationTime, req);
  }
}

module.exports = Hero;
