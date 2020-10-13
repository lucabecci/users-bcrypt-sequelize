const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Task = require("./Task");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;

User.hasMany(Task, { foreinkey: "userid", sourceKey: "id" });
Task.belongsTo(User, { foreinkey: "userid", targetId: "id" });