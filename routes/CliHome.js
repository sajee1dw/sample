const express = require("express")
const cli_home = express.Router()
const cors = require("cors")
cli_home.use(cors())

const cli_home_cont = require("../controllers/CliHome")

cli_home.get('/cli_home/webDeveloper',cli_home_cont.web_dev )


cli_home.get('/cli_home/designDeveloper',cli_home_cont.design_Dev )


cli_home.get('/cli_home/writingDeveloper',cli_home_cont.writing_dev )


cli_home.get('/cli_home/dataDeveloper',cli_home_cont.data_dev )

cli_home.post('/cli_home/cli_getDeveloper',cli_home_cont.cli_get_dev)

cli_home.post('/cli_home/cli_getSkill',cli_home_cont.cli_get_skill)


module.exports = cli_home