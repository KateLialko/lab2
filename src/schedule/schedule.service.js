const Schedule = require("./schedule.model");
const Price = require("../price/price.model");

const create = (newSchedule) => Schedule.create(newSchedule);

const getAll = () => Schedule.getAll();

const getById = (id) => Schedule.getById(id);

const deleteById = (id) => {
  const deletedSchedule = Schedule.deleteById(id);
  const deletedPrices = Price.deleteAllById(id);
  return [deletedSchedule, deletedPrices];
};

module.exports = { create, getAll, getById, deleteById };
