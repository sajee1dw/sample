const Project = require("../models/Project")
const User = require("../models/User")
const Bid = require("../models/Bid")
const Image = require("../models/Image")

exports.web_pro = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Web development,IT & Software Skills',
            isShowed: true
        }, include:[{model:User, include:[Image]},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.design_pro =  (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Designing , Photo editing and Video editing',
            isShowed: true
        }, include:[{model:User, include:[Image]},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.writing_pro = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Content writing',
            isShowed: true
        }, include:[{model:User, include:[Image]},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.data_pro = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Data Entry',
            isShowed: true
        }, include:[{model:User, include:[Image]},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.other_pro = (req,res)=>{

    User.hasMany(Project,{foreignKey: 'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Project.hasOne(Bid,{foreignKey: 'project_ID'})
    Bid.belongsTo(Project,{foreignKey: 'project_ID'})

    Project.findAll({
        where: {
            project_category: 'Other project',
            isShowed: true
        }, include:[{model:User, include:[Image]},{model:Bid}]
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.get_pro = (req,res)=>{
    Project.findOne({
        where: {
            id: req.body.project_ID
        }
    })
    .then(project=>{
        if(project){
            res.json(project)
        }else{
            res.send('Project does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.get_client = (req,res)=>{

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    User.findOne({
        where: {
            id: req.body.client_ID
        },include:{model:Image}
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('Client does not exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.get_bid = (req,res)=>{
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