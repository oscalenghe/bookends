const router = require("express").Router();

const bookRoutes = require("./book-routes");
const reviewRoutes = require("./review-routes");
const userRoutes = require("./user-routes");

router.use("/books", bookRoutes);
router.use("/reviews", reviewRoutes);
router.use("/users", userRoutes);

module.exports = router;
