const router = require("express").Router();
const { User, Book, Review } = require("../models");
const withAuth = require("../utils/withAuth");

// Use withAuth middleware to prevent access to Profile route unless logged in
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      // include: [{ model: Review }, {model: Review, include: [Book]}],
      include: { all: true, nested: true }
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("profile.handlebars", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
