const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "operator", // 'admin' or 'operator'
  },
});

module.exports = User;
