const Bid = require("../models/Bid")
const Project = require("../models/Project")


exports.start_bid = (req,res)=>{
    const bidData = {
        project_ID:req.body.project_ID,
        maximum_value:req.body.maximum_value,
        start_date:new Date()
    }
    
     Bid.create(bidData)

     .then(bid=>{
        res.json(bid)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
    
}



exports.view_bid = (req,res)=>{

    Bid.findOne({
        where:{
            project_ID : req.body.project_ID
        }
    })
    .then(bid=>{
        if(bid){
            res.json(bid)
        }else{
            res.json('bid does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })

}


exports.edit_bid = (req,res)=>{

    Bid.update({
        maximum_value:req.body.maximum_value,
        start_date: new Date()

    },{
        where:{
            project_ID : req.body.project_ID
        }
    })

}

