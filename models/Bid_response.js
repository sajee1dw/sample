const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'bid_response',
    {
        developer_ID:{
            type:Sequelize.INTEGER
        },
        project_ID:{
            type:Sequelize.INTEGER
        },
        bid_value:{
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