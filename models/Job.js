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
    new_job: {
        type: Sequelize.INTEGER,
    },
    description:{
        type: Sequelize.STRING
    }
})

module.exports = Job