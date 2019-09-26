const express = require("express")
const conf_pro = express.Router()
const cors = require("cors")
conf_pro.use(cors())

const conf_pro_cont = require("../controllers/Confirmed_projects")

conf_pro.post('/project/acceptPro', conf_pro_cont.accept_project)


module.exports = conf_pro