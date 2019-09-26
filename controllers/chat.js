const chat = require("../models/chat")
const tUser = require("../models/User")
const fUser = require("../models/User")
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

exports.loadChatList = (req,res)=>{

    tUser.hasMany(chat,{foreignKey:'to_id'})
    chat.belongsTo(tUser,{foreignKey:'to_id'})

    

    chat.findAll({
       
        group: ['to_id'],
        where:{
           from: req.body.userEmail
           
        }, order: [
            ['id', 'DESC']],
        include:[tUser]
        
       
    }).then(result=>{
        res.json(result)
    })
}


exports.loadMsgHis = (req,res) =>{
  chat.findAll({
      attributes: ['from_id','to_id','message'],
    where: {
        [Op.or]:[{[Op.and]:[{from_id :req.body.sendId},{to_id :req.body.recId}]},
                 {[Op.and]:[{from_id :req.body.recId},{to_id :req.body.sendId}]}]
       
    }   
     
}).then(result=>{
        res.json(result)
    })
}