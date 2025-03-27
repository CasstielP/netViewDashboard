const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './netview.db'
})

module.exports = {sequelize}