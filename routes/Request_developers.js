const express = require("express")
const request_developer = express.Router()
const cors = require("cors")
request_developer.use(cors())

const req_dev_cont = require("../controllers/Request_developers")

request_developer.post('/cli_home/sendRequest',req_dev_cont.send_request)

request_developer.post('/cli_home/cancleRequest',req_dev_cont.cancle_request)

request_developer.post('/cli_home/getAllRequest',req_dev_cont.get_all_request)

request_developer.post('/dev_home/countRequestDeveloper',req_dev_cont.count_request)

request_developer.post('/dev_home/newAllRequestDeveloper',req_dev_cont.new_all_request)

request_developer.post('/dev_home/oldAllRequestDeveloper',req_dev_cont.old_all_request)

request_developer.post('/dev_home/viewRequestDeveloper',req_dev_cont.view_request)

request_developer.post('/dev_home/notification/acceptRequest',req_dev_cont.accept_req_dev)

request_developer.post('/dev_home/notification/cancleAccept',req_dev_cont.cancle_accept)

request_developer.post('/cli_home/newAllAcception',req_dev_cont.new_all_acception)

request_developer.post('/cli_home/oldAllAcception',req_dev_cont.old_all_acception)

request_developer.post('/cli_home/countAccept',req_dev_cont.count_accept)

request_developer.post('/cli_home/viewDevAccept',req_dev_cont.view_dev_accept)

request_developer.post('/project/viewReqDev', req_dev_cont.view_developer_request)

module.exports = request_developer