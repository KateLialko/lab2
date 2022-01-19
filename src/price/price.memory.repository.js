const prices = [];

const add = (price) => {
  prices.push(price);
  return price;
};

const getAll = () => prices;

const getById = (id) => prices.find((price) => price.id === id);

const deleteById = (id) => {
  const findIndex = prices.find((price) => price.id === id);
  if (findIndex === -1) return;
  const removedElement = prices[findIndex];
  prices.splice(findIndex, 1);
  return removedElement;
};

const deleteAllById = (id) => {
  const findPrices = prices.filter((price) => price.scheduleId === id);
  for (const price of findPrices) {
    deleteById(price.id);
  }

  return findPrices;
};

module.exports = { add, getAll, getById, deleteById, deleteAllById };
