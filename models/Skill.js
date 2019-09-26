const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'skill',
    {
        user_ID:{
            type:Sequelize.INTEGER
        },
        user_email:{
            type:Sequelize.STRING
        },
        web_skill:{
            type:Sequelize.STRING
        },
        design_skill:{
            type:Sequelize.STRING
        },
        writing_skill:{
            type:Sequelize.STRING
        },
        data_skill:{
            type:Sequelize.STRING
        },
        other_skill:{
            type:Sequelize.STRING
        }

    },
    {
        timestamp: false,
        freezeTableName: true
    }
)