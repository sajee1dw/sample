const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'user',
    {
        first_name:{
            type:Sequelize.STRING
        },
        last_name:{
            type:Sequelize.STRING
        },
        user_type:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        rating:{
            type:Sequelize.STRING
        },
        gender:{
            type:Sequelize.STRING
        },
        contact_no:{
                type:Sequelize.STRING
        },
        isActivated:{
            type:Sequelize.BOOLEAN
        }

    },
    {
        timestamp: false,
        freezeTableName: true
    }
)