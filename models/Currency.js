// @ts-check

class Currency {
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

class Price {
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
    return this.currency;
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

module.exports = {
  Currency,
  Price,
  ProductionType,
};
