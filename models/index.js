const User = require("./User");
const Book = require("./Book");
const Review = require("./Review");

// // Defines a User as having many Reviews, thus creating a foreign key in the `Review` table
User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Defines a Book as having many Reviews, thus creating a foreign key in the `Review` table
Book.hasMany(Review, {
  foreignKey: "book_id",
  onDelete: "CASCADE",
});

// A review is owned by a user
// The association between a User and a Review can also be created from the Review side
Review.belongsTo(User, {
  foreignKey: "user_id",
});

// A review is owned by a book
// The association between a Book and a Review can also be created from the Reviews side
Review.belongsTo(Book, {
  foreignKey: "book_id",
});

module.exports = { User, Book, Review };
