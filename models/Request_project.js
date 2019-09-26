const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'request_project',
    {
        developer_ID:{
            type:Sequelize.INTEGER
        },
        project_ID:{
            type:Sequelize.INTEGER
        },
        isViewed:{
            type:Sequelize.BOOLEAN
        },
        isAccepted:{
            type:Sequelize.BOOLEAN
        },
        isViewedAccept:{
            type:Sequelize.BOOLEAN
        }
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)