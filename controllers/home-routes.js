const router = require("express").Router();

// route to get to homepage
router.get("/", async (req, res) => {
  res.render("home.handlebars");
});

module.exports = router;
