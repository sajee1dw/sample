const express = require("express")
const request_project = express.Router()
const cors = require("cors")
request_project.use(cors())

const req_pro_cont = require("../controllers/Request_projects")


request_project.post('/dev_home/sendRequest',req_pro_cont.send_request)

request_project.post('/dev_home/cancleRequest',req_pro_cont.cancle_request)

request_project.post('/dev_home/getRequest',req_pro_cont.get_request)

request_project.post('/cli_home/countRequest',req_pro_cont.count_request)

request_project.post('/cli_home/newAllRequest',req_pro_cont.new_all_req)

request_project.post('/cli_home/oldAllRequest',req_pro_cont.old_all_req)

request_project.post('/cli_home/viewProjectRequest',req_pro_cont.view_request)

request_project.post('/dev_home/notification/acceptRequest',req_pro_cont.accept_project)

request_project.post('/project/viewProReq', req_pro_cont.view_project_request )

request_project.post('/dev_home/newAllAcceptProReq', req_pro_cont.new_all_acc_pro_req)

request_project.post('/dev_home/oldAllAcceptProReq', req_pro_cont.old_all_acc_pro_req)

request_project.post('/dev_home/countAccProReq', req_pro_cont.count_accept_pro_req)

request_project.post('/dev_home/viewAccProReq', req_pro_cont.view_acc_pro_req)

module.exports = request_project