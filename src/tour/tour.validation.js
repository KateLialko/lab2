const validate = (newTour) => {
    if (!newTour) return false;
    if (!newTour.title || newTour.title.length === 0) return false;
    if (!newTour.slug || newTour.slug.length === 0) return false;
    if (!newTour.description || newTour.description.length === 0) return false;

    return true;
};

module.exports = { validate };