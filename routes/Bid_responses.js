const express = require("express")
const bid_response = express.Router()
const cors = require("cors")
bid_response.use(cors())

const bid_res_cont = require("../controllers/Bid_responses")

bid_response.post('/dev_home/sendBid',bid_res_cont.send_bid)

bid_response.post('/dev_home/getBid',bid_res_cont.get_bid)

bid_response.post('/dev_home/editBid',bid_res_cont.edit_bid)

bid_response.post('/dev_home/deleteBid',bid_res_cont.delete_bid)

bid_response.post('/cli_home/countBid',bid_res_cont.count_bid_response)

bid_response.post('/cli_home/newAllBid',bid_res_cont.new_bid_response)

bid_response.post('/cli_home/oldAllBid',bid_res_cont.old_bid_response)

bid_response.post('/cli_home/viewBidResponse',bid_res_cont.view_bid_response)

bid_response.post('/project/viewBidReq',bid_res_cont.view_bid_request)

bid_response.post('/dev_home/newAllAcceptBidReq',bid_res_cont.new_all_acc_bid_req)

bid_response.post('/dev_home/oldAllAcceptBidReq',bid_res_cont.old_all_acc_bid_req)

bid_response.post('/dev_home/countAcceptBidReq', bid_res_cont.count_accept_bid_req)

bid_response.post('/dev_home/viewAccBidReq', bid_res_cont.view_acc_bid_req)

module.exports = bid_response