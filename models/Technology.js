// @ts-check
const Entity = require("./Entity");

class Technology extends Entity {
  /**
   * @param {string} id
   * @param {string} name
   * @param {string[]} req
   */
  constructor(id, name, req) {
    super(id, name, req);
    this.id = id;
    this.name = name;
    this.req = req;
  }
}

module.exports = Technology;
