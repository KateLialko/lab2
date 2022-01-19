const tours = [];

const add = (tour) => {
  tours.push(tour);
  return tour;
};

const getAll = () => tours;

const getById = (id) => tours.find((tour) => tour.id === id);

const deleteById = (id) => {
  const findIndex = tours.find((tour) => tour.id === id);
  if (findIndex === -1) return;
  const removedElement = tours[findIndex];
  tours.splice(findIndex, 1);
  return removedElement;
};

module.exports = { add, getAll, getById, deleteById };
