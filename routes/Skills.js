const express = require("express")
const skills = express.Router()
const cors = require("cors")
skills.use(cors())

const skill_cont = require("../controllers/Skills")

// user add skill
skills.post('/skill', skill_cont.add_skill)


//user update skill
skills.post('/updateSkill',skill_cont.update_skill)

module.exports = skills