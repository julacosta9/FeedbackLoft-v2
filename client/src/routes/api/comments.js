const router = require("express").Router();
const controller = require("../../controllers");

// The order of the routes matter. Be careful changing

// Matches with "/api/comments"
router.route("/")
    .post(controller.Comment.create);

// Matches with "/api/comments/byAuthor/:id"
router.route("/byAuthor/:id")
    .get(controller.Comment.findAllByAuthorId);

// Matches with "/api/comments/byProject/:id"
router.route("/byProject/:id")
    .get(controller.Comment.findAllByProjectId);

// Matches with "/api/comments/:id"
router.route("/:id")
    .get(controller.Comment.findById)
    .put(controller.Comment.update)
    .delete(controller.Comment.remove);

module.exports = router;
