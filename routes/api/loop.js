const router = require("express").Router();
const controller = require("../../controllers");

// Matches with "/api/projects/loop"
router.route("/loop")
    .get(controller.Project.findProjectForReview)

module.exports = router;