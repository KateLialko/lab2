const { create, getAll, getById, deleteById } = require("./tour.controller");

const router = require("express").Router();

router.route("/").get(getAll).post(create);
router.route("/:tourId").get(getById).delete(deleteById);

module.exports = router;
