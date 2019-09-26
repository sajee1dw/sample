const User = require("../models/User") 
const Sequelize = require('sequelize')

exports.getClients = (req,res)=>{

    User.findAll({
        where:{
            user_type: "Client"
        }
    })
    .then(AllClients=>{
        res.json(AllClients)
    })
    
}
exports.getDevelopers = (req,res)=>{

    User.findAll({
        where:{
            user_type: "Developer"
        }
    })
    .then(AllDev=>{
       
        res.json(AllDev)
    })
    
}
exports.countOfDev=(req,res)=>{
User.count({
    where: {
        user_type: "Developer"
      }
    
}).then(countdev=>{
    res.json(countdev)
})
}

exports.countOfCli=(req,res)=>{
    User.count({
        where: {
            user_type: "Client"
          }
        
    }).then(countcli=>{
        res.json(countcli)
    })
}

 exports.banedUser=(req,res)=>{
     User.update({
        isActivated:false
        },{       
         where:{
             email:req.body.banedEmail
         }
        
     })
 }

 exports.activateUser=(req,res)=>{
     User.update({
         isActivated:true
     },{
         where:{
             email:req.body.activateEmail
         }
     })
 }


