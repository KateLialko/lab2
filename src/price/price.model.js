const { v4: uuid } = require("uuid");
const { validate } = require("./price.validation");

const {
  add,
  deleteById,
  getAll,
  getById,
  deleteAllById,
} = require("./schedule.memory.repository");

class Schedule {
  constructor({
    id = uuid(),
    scheduleId = null,
    priceValue = null,
    priceCurrency = null,
    createdAd = new Date(),
    updatedAt = new Date(),
  } = {}) {
    this.id = id;
    this.scheduleId = scheduleId;
    this.priceValue = priceValue;
    this.priceCurrency = priceCurrency;
    this.createdAd = createdAd;
    this.updatedAt = updatedAt;
  }

  static create(newPrice) {
    if (!validate(newPrice)) return false;
    
    const price = new Schedule(newPrice);
    const result = add(price);
    return result;
  }

  static getAll() {
    return getAll();
  }

  static getById(id) {
    return getById(id);
  }

  static deleteById(id) {
    return deleteById(id);
  }

  static deleteAllById(id) {
    return deleteAllById(id);
  }
}

module.exports = Schedule;
