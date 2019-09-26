const Confirmed_project = require("../models/Confirmed_project")
const Request_project = require("../models/Request_project")
const Bid_response = require("../models/Bid_response")

exports.accept_project = (req,res) =>{

    const confirm_details = {
        developer_ID : req.body.developer_ID,
        client_ID : req.body.client_ID,
        project_ID: req.body.project_ID,
        category : req.body.category,
        isCompleted: false
    }

    Confirmed_project.create(confirm_details)
    .then(details =>{
        res.send(details)
    })

    if(req.body.category == 'bid'){
        Bid_response.update({
            isViewed: true,
            isAccepted: true
        },{
            where:{
                developer_ID: req.body.developer_ID,
                project_ID: req.body.project_ID
            }
        })
    }else{
        Request_project.update({
            isViewed: true,
            isAccepted: true
        },{
            where:{
                developer_ID: req.body.developer_ID,
                project_ID: req.body.project_ID
            }
        })
    }

    

}