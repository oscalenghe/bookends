const sequelize = require("../config/connection");
const { User, Book, Review } = require("../models");

const userData = require("./userData.json");
const bookData = require("./bookData.json");
const reviewData = require("./reviewData.json");

// Add aync keyword to the function `seedDatabase` makes it asynchronous
const seedDatabase = async () => {
  // Add await keyword in front of the expression inside the async function
  await sequelize.sync({ force: true });
  // Once JavaSript recognizes the `await` keyword, it waits for the promise to be fulfilled before moving on
  // bulkCreate() method inserts multiple records to a database table with a single function call
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const books = await Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
  });

  const reviews = await Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  });

  // Node.js normally exits with a 0 status code when no more async operations are pending
  process.exit(0);
};

seedDatabase();
