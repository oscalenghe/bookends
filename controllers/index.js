const router = require("express").Router();

const homeRoutes = require("./home-routes");
const loginRoutes = require("./login-routes");
const profileRoutes = require("./profile-routes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/profile", profileRoutes);
router.use("/api", apiRoutes);

module.exports = router;
