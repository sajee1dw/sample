const express = require("express")
const dev_home = express.Router()
const cors = require("cors")
dev_home.use(cors())

const dev_home_cont = require("../controllers/DevHome")

//dev home get webProject
dev_home.get('/dev_home/webProject', dev_home_cont.web_pro)

//dev home get designProject
dev_home.get('/dev_home/designProject', dev_home_cont.design_pro)

//dev home get writingProject
dev_home.get('/dev_home/writingProject', dev_home_cont.writing_pro)

//dev home get dataProject
dev_home.get('/dev_home/dataProject', dev_home_cont.data_pro )

//dev home get otherProject
dev_home.get('/dev_home/otherProject', dev_home_cont.other_pro)

//dev home get project
dev_home.post('/dev_home/dev_getProject', dev_home_cont.get_pro)

//dev home get client
dev_home.post('/dev_home/dev_getClient', dev_home_cont.get_client)

//dev home get bid
dev_home.post('/dev_home/dev_getBid', dev_home_cont.get_bid)

module.exports = dev_home