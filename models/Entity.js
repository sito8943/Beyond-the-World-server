// @ts-check

class Entity {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {string[]} req
   */
  constructor(id, name, req = []) {
    this.id = id;
    this.name = name;
    this.req = req;
  }

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }

  get Req() {
    return this.req;
  }
}

module.exports = Entity;
