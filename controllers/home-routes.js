const router = require("express").Router();
const { User, Book, Review } = require("../models");

// route to get to homepage
// route to get all books: this will be the library page eventually
router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll();

    const books = bookData.map((book) => book.get({ plain: true }));

    res.render("home", {
      books,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//will render page for individual book and its corresponding review
router.get("/book/:id", async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: ["review", "user_id"],
        },
      ],
    });

    const book = dbBookData.get({ plain: true });
    console.log(book);
    res.render("bookPage", { book });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
