const router = require("express").Router();
const userRoutes = require("./users.js");
const projectRoutes = require("./projects.js");
const commentRoutes = require("./comments.js");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/comments", commentRoutes);

module.exports = router;