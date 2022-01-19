const priceService = require("./price.service");

const create = (req, res) => {
  const price = priceService.create(req.body);
  if (!price)
    return res
      .status(400)
      .send({ code: "Price_Not_Create", message: "Price not create" });

  return res.status(200).send(price);
};

const getAll = (req, res) => {
  const prices = priceService.getAll();
  if (prices.length === 0)
    return res
      .status(404)
      .send({ code: "Prices_Not_Found", message: "Prices not found" });

  return res.status(200).send(prices);
};

const getById = (req, res) => {
  const price = priceService.getById(req.params.priceId);
  if (!price)
    return res
      .status(404)
      .send({ code: "Price_Not_Found", message: "Price not found" });

  return res.status(200).send(price);
};

const deleteById = (req, res) => {
  const deletedePrice = priceService.deleteById(req.params.priceId);
  if (!deletedePrice)
    return res
      .status(404)
      .send({ code: "Price_Not_Found", message: "Price not found " });

  return res.status(200).send(deletedePrice);
};

module.exports = { create, getAll, getById, deleteById };
