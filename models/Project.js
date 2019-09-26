const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'project',
    {
        client_ID:{
            type:Sequelize.INTEGER
        },
        project_name:{
            type:Sequelize.STRING
        },
        project_category:{
            type:Sequelize.STRING
        },
        project_description:{
            type:Sequelize.STRING
        },
        payment:{
            type:Sequelize.STRING
        },
        isShowed:{
            type:Sequelize.BOOLEAN
        },

    },
    {
        timestamp: false,
        freezeTableName: true
    }
)