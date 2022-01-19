const schedules = [];

const add = (schedule) => {
  schedules.push(schedule);
  return schedule;
};

const getAll = () => schedules;

const getById = (id) => schedules.find((schedule) => schedule.id === id);

const deleteById = (id) => {
  const findIndex = schedules.find((schedule) => schedule.id === id);
  if (findIndex === -1) return;
  const removedElement = schedules[findIndex];
  schedules.splice(findIndex, 1);
  return removedElement;
};

const deleteAllById = (id) => {
    const findSchedules = schedules.filter((schedule) => schedule.tourId === id);
    for (const schedule of findSchedules) {
        deleteById(schedule.id);
    }

    return findSchedules;
}

module.exports = { add, getAll, getById, deleteById, deleteAllById };
