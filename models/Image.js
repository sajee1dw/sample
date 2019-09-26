const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'image',
    {
        user_ID:{
            type:Sequelize.INTEGER
        },
        image_name:{
            type:Sequelize.STRING
        }
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)