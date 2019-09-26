const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'chat',
    {
        from:{
            type:Sequelize.STRING
        },
        to:{
            type:Sequelize.STRING
        },
        message:{
            type:Sequelize.STRING
        },
        isViewed:{
            type:Sequelize.STRING
        },
        to_id:{
           type:Sequelize.INTEGER
        },
        from_id:{
            type:Sequelize.INTEGER
         },
    },
    {
        timestamp: false,
        freezeTableName: true
    }
)