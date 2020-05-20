const router = require("express").Router();
const controller = require("../../controllers/index.js");

// Matches with "/api/users"
router.route("/all")
    .get(controller.findAll);
    // .post(booksController.create);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(controller.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
