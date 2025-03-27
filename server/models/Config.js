const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Config = sequelize.define("Config", {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Config;
