const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'confirmed_project',
    {
        developer_ID:{
            type:Sequelize.INTEGER
        },
        client_ID:{
            type:Sequelize.INTEGER
        },
        project_ID:{
            type:Sequelize.INTEGER
        },
        category:{
            type:Sequelize.STRING
        },
        isCompleted:{
            type:Sequelize.BOOLEAN
        }
        
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)