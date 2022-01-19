const { v4: uuid } = require("uuid");
const { validate } = require("./schedule.validation");

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
    tourId = null,
    isActive = false,
    startDate = null,
    endDate = null,
    createdAd = new Date(),
    updatedAt = new Date(),
  } = {}) {
    this.id = id;
    this.tourId = tourId;
    this.isActive = isActive;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.createdAd = createdAd;
    this.updatedAt = updatedAt;
  }

  static create(newSchedule) {
    if (!validate(newSchedule)) return false;
    
    const schedule = new Schedule(newSchedule);
    const result = add(schedule);
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
