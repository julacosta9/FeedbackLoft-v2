const router = require("express").Router();
const userRoutes = require("./users.js");
const projectRoutes = require("./projects.js");
const commentRoutes = require("./comments.js");
const loopRoutes = require("./loop.js");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/comments", commentRoutes);
router.use("/loop", loopRoutes);

module.exports = router;