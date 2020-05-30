const router = require("express").Router();
const controller = require("../../controllers");

// Matches with "/api/loop"
router.route("/")
    .get(controller.Loop.findProjectForReview)

module.exports = router;