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