const { create, getAll, getById, deleteById } = require("./price.controller");

const router = require("express").Router();

router.route("/").get(getAll).post(create);
router.route("/:scheduleId").get(getById).delete(deleteById);

module.exports = router;
