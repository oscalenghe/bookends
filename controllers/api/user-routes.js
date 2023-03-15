const router = require("express").Router();

// route to get to profile page
router.get("/", async (req, res) => {
  res.render("profile.handlebars");
});

module.exports = router;