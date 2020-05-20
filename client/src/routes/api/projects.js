const router = require("express").Router();
const controller = require("../../controllers");

// Matches with "/api/projects"
router.route("/")
    .post(controller.Project.create);

// Matches with "/api/projects/:id"
router.route("/:id")
    .get(controller.Project.findById)
    .put(controller.Project.update)
    .delete(controller.Project.remove);

// Matches with "/api/projects/all"
router.route("/all")
    .get(controller.Project.findAll);

module.exports = router;