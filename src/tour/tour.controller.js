const tourService = require("./tour.service");

const create = (req, res) => {
  const tour = tourService.create(req.body);
  if (!tour)
    return res
      .status(400)
      .send({ code: "Tour_Not_Create", message: "Tour not create" });

  return res.status(200).send(tour);
};

const getAll = (req, res) => {
  const tours = tourService.getAll();
  if (tours.length === 0)
    return res
      .status(404)
      .send({ code: "Tours_Not_Found", message: "Tours not found" });

  return res.status(200).send(tours);
};

const getById = (req, res) => {
  const tour = tourService.getById(req.params.tourId);
  if (!tour)
    return res
      .status(404)
      .send({ code: "Tour_Not_Found", message: "Tour not found" });

  return res.status(200).send(tour);
};

const deleteById = (req, res) => {
  const deletedTour = tourService.deleteById(req.params.tourId);
  if (!deletedTour)
    return res
      .status(404)
      .send({ code: "Tour_Not_Found", message: "Tour not found " });

  return res.status(200).send(deletedTour);
};

module.exports = { create, getAll, getById, deleteById };
