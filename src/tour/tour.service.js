const Tour = require("./tour.model");
const Schedule = require("../schedule/schedule.model");

const create = (newRoute) => Tour.create(newRoute);

const getAll = () => Tour.getAll();

const getById = (id) => Tour.getById(id);

const deleteById = (id) => {
  const deletedTour = Tour.deleteById(id);
  const deletedSchedules = Schedule.deleteAllById(id);
  return [deletedTour, deletedSchedules];
};

module.exports = { create, getAll, getById, deleteById };
