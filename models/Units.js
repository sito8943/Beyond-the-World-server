// @ts-check
const Entity = require("./Entity");

class Unit extends Entity {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {object} price
   * @param {number} life
   * @param {number} speed
   * @param {string[]} req
   */
  constructor(id, name, price, life, speed, req) {
    super(id, name, price, req);
    this.currentPrice = { ...price };
    this.life = life;
    this.currentLife = life;
    this.speed = speed;
    this.currentSpeed = speed;
    this.req = req;
  }

  createUnit(
    options = { id: "", name: "", price: {}, life: 0, speed: 0, req: [] }
  ) {
    const { id, name, price, life, speed, req } = options;
    this.id = id;
    this.name = name;
    this.price = price;
    this.currentPrice = { ...price };
    this.life = life;
    this.currentLife = life;
    this.speed = speed;
    this.currentSpeed = speed;
    this.req = req;
  }

  get CurrentPrice() {
    return this.currentPrice;
  }

  set CurrentPrice(newPrice) {
    this.currentPrice = newPrice;
  }

  get Life() {
    return this.life;
  }

  get CurrentLife() {
    return this.currentLife;
  }

  set CurrentLife(newLife) {
    this.currentLife = newLife;
  }

  get Speed() {
    return this.speed;
  }

  get CurrentSpeed() {
    return this.currentSpeed;
  }

  set CurrentSpeed(newSpeed) {
    this.currentSpeed = newSpeed;
  }
}

module.exports = Unit;
