const router = require("express").Router();
const controller = require("../../controllers");

// The order of the routes matter
// If the /:id route is placed before the /all route, "all" in the url will be interpreted as the id

// Matches with "/api/projects"
router.route("/")
    .post(controller.Project.create);

// Matches with "/api/projects/audio-upload"
router.route("/audio-upload")
    .post(controller.Project.uploadtoAWS);
router.route("/byUser/:id")
    .get(controller.Project.findAllByUserId)

// Matches with "/api/projects/all"
router.route("/all")
    .get(controller.Project.findAll);

// Matches with "/api/projects/:id"
router.route("/:id")
    .get(controller.Project.findById)
    .put(controller.Project.update)
    .delete(controller.Project.remove);

module.exports = router;