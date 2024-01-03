const Sequelize = require('sequelize')
const db = require('../db/connection')

const Job = db.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    comapny: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    newJob: {
        type: Sequelize.INTEGER,
    }
})

module.exports = Job