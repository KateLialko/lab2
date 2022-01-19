const scheduleService = require("./schedule.service");

const create = (req, res) => {
    const schedule = scheduleService.create(req.body);
    if (!schedule)
      return res
        .status(400)
        .send({ code: "Schedule_Not_Create", message: "Schedule not create" });
  
    return res.status(200).send(schedule);
  };
  
  const getAll = (req, res) => {
    const schedules = scheduleService.getAll();
    if (schedules.length === 0)
      return res
        .status(404)
        .send({ code: "Schedules_Not_Found", message: "Schedules not found" });
  
    return res.status(200).send(schedules);
  };
  
  const getById = (req, res) => {
    const schedule = scheduleService.getById(req.params.scheduleId);
    if (!schedule)
      return res
        .status(404)
        .send({ code: "Schedule_Not_Found", message: "Schedule not found" });
  
    return res.status(200).send(schedule);
  };
  
  const deleteById = (req, res) => {
    const deletedSchedule = scheduleService.deleteById(req.params.scheduleId);
    if (!deletedSchedule)
      return res
        .status(404)
        .send({ code: "Schedule_Not_Found", message: "Schedule not found " });
  
    return res.status(200).send(deletedSchedule);
  };
  
  module.exports = { create, getAll, getById, deleteById };