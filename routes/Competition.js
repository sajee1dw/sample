const express = require("express")
const competitions = express.Router()
const cors = require("cors")
competitions.use(cors())

const cont_com = require("../controllers/Competitions")

competitions.post('/addCompetition', cont_com.add_competition)

module.exports = competitions