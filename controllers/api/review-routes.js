const router = require("express").Router();
const { Review, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const reviews = reviewData.map((review) => review.get({ plain: true }));

    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//will get review by id
router.get("/:id", async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    const reviews = reviewData.get({ plain: true });

    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//update review by id
router.put("/:id", (req, res) => {
  // Calls the update method on the Book model
  Review.update(
    {
      // All the fields you can update and the data attached to the request body.
      review: req.body.review,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedReview) => {
      // Sends the updated book as a json response
      res.json(updatedReview);
    })
    .catch((err) => res.json(err));
});

router.post("/", async (req, res) => {
  // Calls the update method on the Book model
  try {
    const reviewData = await Review.create({
      review: req.body.review,
      user_id: 1,
      book_id: 1,
    });
    res.status(200).json(reviewData);
    console.log(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
