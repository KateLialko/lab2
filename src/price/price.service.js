const Price = require("./price.model");

const create = (newPrice) => Price.create(newPrice);

const getAll = () => Price.getAll();

const getById = (id) => Price.getById(id);

const deleteById = (id) => {
  const deletedPrice = Price.deleteById(id);
  return deletedPrice;
};

module.exports = { create, getAll, getById, deleteById };
