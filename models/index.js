const User = require("./User");

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User };
