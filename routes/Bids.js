const express = require("express")
const bids = express.Router()
const cors = require("cors")
bids.use(cors())

const bids_cont = require("../controllers/Bids")

//project start a bid

bids.post('/project/startBid', bids_cont.start_bid)


//Project view Bid

bids.post('/project/viewBid',bids_cont.view_bid)


// project edit bid

bids.post('/project/editBid',bids_cont.edit_bid)



module.exports = bids
