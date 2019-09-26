const Project = require("../models/Project")
const User = require("../models/User")
const Skill =require("../models/Skill")
const Image =require("../models/Image")

const Sequelize = require("sequelize")
const Op = Sequelize.Op

exports.web_dev = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           web_skill:{[Op.ne]: ''}
        }, include:[{model:User, include:[Image]}]
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('user does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.design_Dev = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           design_skill:{[Op.ne]: ''}
        }, include:[{model:User, include:[Image]}]
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('user does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.writing_dev = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           writing_skill:{[Op.ne]: ''}
        }, include:[{model:User, include:[Image]}]
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('user does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.data_dev = (req,res)=>{

    User.hasOne(Skill,{foreignKey: 'user_ID'})
    Skill.belongsTo(User,{foreignKey: 'user_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Skill.findAll({
        where: {
           data_skill:{[Op.ne]: ''}
        }, include:[{model:User, include:[Image]}]
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('user does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.cli_get_dev = (req,res)=>{

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    User.findOne({
        where: {
           id: req.body.user_ID
        }, include:[Image]
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('user does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.cli_get_skill = (req,res)=>{
    Skill.findOne({
        where: {
            id: req.body.skill_ID
        }
    })
    .then(skill=>{
        if(skill){
            res.json(skill)
        }else{
            res.send('Skill does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}