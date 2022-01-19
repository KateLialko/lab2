const Tour = require("../tour/tour.model");

const validate = (newSchedule) => {
    if (!newSchedule) return false;
    if (isNaN(new Date(newSchedule.startDate).getTime())) return false;
    if (isNaN(new Date(newSchedule.endDate).getTime())) return false;
    if (!newSchedule.tourId || !Tour.getById(newSchedule.tourId)) return false;

    return true;
};

module.exports = { validate };
