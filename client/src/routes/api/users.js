const router = require("express").Router();
const controller = require("../../controllers");

// The order of the routes matter
// If the /:id route is placed before the /all route, "all" in the url will be interpreted as the id

// Matches with "/api/users"
router.route("/")
    .post(controller.User.create);

// Matches with "/api/users/all"
router.route("/all")
    .get(controller.User.findAll);

// Matches with "/api/users/:id"
router.route("/:id")
    .get(controller.User.findById)
    .put(controller.User.update)
    .delete(controller.User.remove);

module.exports = router;
