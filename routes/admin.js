const express = require("express")
const admins = express.Router()
const cors = require("cors")
const con_admin = require("../controllers/admin")

admins.use(cors())

admins.get('/admin/getClients',con_admin.getClients)
admins.get('/admin/getDevelopers',con_admin.getDevelopers)
admins.get('/admin/countOfDev',con_admin.countOfDev)
admins.get('/admin/countOfCli',con_admin.countOfCli)
admins.post('/admin/banedUser',con_admin.banedUser)
admins.post('/admin/activateUser',con_admin.activateUser)


module.exports = admins