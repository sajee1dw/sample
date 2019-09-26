const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'competition',
    {
        competition_name:{
            type:Sequelize.STRING
        },
        winning_price:{
            type:Sequelize.STRING
        }
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)