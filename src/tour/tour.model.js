const { v4: uuid } = require('uuid');
const { validate } = require("./tour.validation");

const {
  add,
  deleteById,
  getAll,
  getById,
} = require("./tour.memory.repository");

class Tour {
    constructor({
        id = uuid(),
        title = null,
        slug = null,
        description = null,
        isActive = false,
        createdAd = new Date(),
        updatedAt = new Date()
    } = {}) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.isActive = isActive;
        this.createdAd = createdAd;
        this.updatedAt = updatedAt;
    }

    static create(newTour) {
        if (!validate(newTour)) return false;

        const tour = new Tour(newTour);
        const result = add(tour);
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
}

module.exports = Tour;