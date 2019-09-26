const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'bid',
    {
        project_ID:{
            type:Sequelize.INTEGER
        },
        maximum_value:{
            type:Sequelize.STRING
        },
        start_date:{
            type:Sequelize.DATE
        }
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)