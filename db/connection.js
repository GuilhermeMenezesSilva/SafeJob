const sequilize = require('sequelize')

const sequelize = new sequilize.Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

module.exports = sequelize