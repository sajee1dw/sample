const express = require("express")
const users = express.Router()
const cors = require("cors")
users.use(cors())

const user_cont = require("../controllers/Users")

//Developer REGISTER
users.post('/dev_register', user_cont.dev_register)

//Client REGISTER
users.post('/cli_register', user_cont.cli_register)

//Login
users.post('/',user_cont.login)

//PROFILE
users.get('/profile',user_cont.profile)
users.get('/skillprofile',user_cont.skill)

//Edit profile
users.post('/editProf',user_cont.edit_profile)



module.exports = users