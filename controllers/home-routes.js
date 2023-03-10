const router = require("express").Router();

// route to get homepage
router.get("/", async (req, res) => {
  res.render("home.handlebars");
});

module.exports = router;
