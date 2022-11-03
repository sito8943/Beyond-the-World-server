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
   * @param {number} level
   */
  constructor(id, name, price, life, speed, creationTime, req = [], level = 1) {
    super(id, name, price, life, speed, creationTime, req);
    this.level = level;
  }

  createHero(
    options = {
      id: "",
      name: "",
      price: {},
      life: 0,
      speed: 0,
      creationTime: 0,
      req: [],
      level: 1,
    }
  ) {
    const { id, name, price, life, speed, creationTime, req, level } = options;
    this.id = id;
    this.name = name;
    this.price = price;
    this.creationTime = creationTime;
    this.currentPrice = { ...price };
    this.life = life;
    this.currentLife = life;
    this.speed = speed;
    this.currentSpeed = speed;
    this.req = req;
    this.level = level;
  }

  get Level() {
    return this.level;
  }

  set Level(newLevel) {
    this.level = newLevel;
  }
}

module.exports = Hero;
