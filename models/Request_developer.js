const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'request_developer',
    {
        client_ID:{
            type:Sequelize.INTEGER
        },
        project_ID:{
            type:Sequelize.INTEGER
        },
        developer_ID:{
            type:Sequelize.INTEGER
        },
        isViewed:{
            type:Sequelize.BOOLEAN
        },
        isAccepted:{
            type:Sequelize.BOOLEAN
        },
        isViewedByCli:{
            type:Sequelize.BOOLEAN
        }
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)