const express = require("express")
const projects = express.Router()
const cors = require("cors")
projects.use(cors())

const pro_cont = require("../controllers/Projects")

//project Add a project
projects.post('/project/addProject',pro_cont.add_project)

//project view all project
projects.get('/viewAllProject',pro_cont.view_all_pro)

//project view Project
projects.post('/project/viewProject',pro_cont.view_pro)

// project edit project
projects.post('/project/editProject',pro_cont.edit_pro)

// project delete project
projects.post('/project/deleteProject',pro_cont.delete_pro)




module.exports = projects