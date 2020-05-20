const router = require("express").Router();
const controller = require("../../controllers");

// Matches with "/api/users"
router.route("/")
    .post(controller.User.create);

// Matches with "/api/users/:id"
router.route("/:id")
    .get(controller.User.findById)
    .put(controller.User.update)
    .delete(controller.User.remove);

// Matches with "/api/users/all"
router.route("/all")
    .get(controller.User.findAll);

module.exports = router;
