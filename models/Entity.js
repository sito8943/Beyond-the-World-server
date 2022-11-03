// @ts-check

class Entity {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {object} price
   * @param {number} creationTime
   * @param {string[]} req
   */
  constructor(id, name, price = {}, creationTime = 0, req = []) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.creationTime = creationTime;
    this.req = req;
  }

  /**
   *
   * @param {string[]} technologies
   * @returns
   */
  isReady(technologies) {
    for (const item of this.req)
      if (technologies.indexOf(item) === -1) return false;
    return true;
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

  get Price() {
    return this.price;
  }

  get CreationTime() {
    return this.creationTime;
  }
}

module.exports = Entity;
