//config
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


//device
const {DataTypes} = require("sequelize")
const {sequelize} = require('../config/database')

const Device = sequelize.define("Device", {
    name: {
        type: DataTypes.STRING,
        allowNull:false,
    }, 
    ip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Online",

    },
    uptime: {
        type: DataTypes.STRING
    },
    signalStrength: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Device

//user
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
