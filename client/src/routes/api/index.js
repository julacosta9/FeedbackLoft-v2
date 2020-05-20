const router = require("express").Router();
const userRoutes = require("./users.js");

// User routes
router.use("/users", userRoutes);
// router.use("/projects", projectRoutes);
// router.use("/comments", commentRoutes);


module.exports = router;