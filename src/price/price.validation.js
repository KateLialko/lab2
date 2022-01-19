const Schedule = require("../schedule/schedule.model");

const validate = (newPrice) => {
    if (!newPrice) return false;
    if (!Number(newPrice.priceValue) || isNaN(Number(newPrice.priceValue))) return false;
    if (!newPrice.priceCurrency || newPrice.priceCurrency.length === 0) return false;
    if (!newPrice.scheduleId || !Schedule.getById(newPrice.scheduleId)) return false;

    return true;
};

module.exports = { validate };
