const jwt = require("jsonwebtoken")
const Project = require("../models/Project")
const Bid = require("../models/Bid")
const User = require("../models/User")
const Bid_response = require("../models/Bid_Response")
const Request_developer = require("../models/Request_developer")
const Request_project = require("../models/Request_project")

exports.add_project = (req,res)=>{
    const projectData = {
        client_ID:req.body.client_ID,
        project_name:req.body.project_name,
        project_category: req.body.project_category,
        project_description:req.body.project_description,
        payment:req.body.payment,
        isShowed: true
    }
    
     Project.create(projectData)
     .then(project=>{
        res.json(project)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.view_all_pro = (req,res)=>{

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Project.findAll({
        where: {
            client_ID:decoded.id
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


exports.view_pro = (req,res)=>{

    Project.findOne({
        where:{
            id: req.body.id
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



exports.edit_pro = (req,res)=>{

    Project.update({

        project_name:req.body.project_name,
        project_category: req.body.project_category,
        project_description:req.body.project_description,
        payment:req.body.payment

    },{
        where:{
            id:req.body.id
        }
    })


    Bid.update({
        maximum_value: req.body.maximum_value
    },{
        where:{
            project_ID:req.body.id
        }
    })

}



exports.delete_pro = (req,res)=>{

    Project.destroy({
        where:{
            id:req.body.id
        }
    })

    Bid.destroy({
        where:{
            project_ID:req.body.id
        }
    })

}




exports.pro_bid_response = (req,res)=>{

    Project.hasMany(Bid_response,{foreignKey: 'project_ID'})
    Bid_response.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Bid_response,{foreignKey: 'developer_ID'})
    Bid_response.belongsTo(User,{foreignKey: 'developer_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Bid_response.findAll({
      where:{
        project_ID:req.body.project_ID
      },
      include:[{
            model:Project,
        where:{
            client_ID:req.body.client_ID
      }
    },{model: User, include:[Image]}
    ]
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.pro_dev_request = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'developer_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'developer_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findAll({
        where:{
            project_ID:req.body.project_ID,
            client_ID: req.body.client_ID
          },
          include:[{
              model:User,include:[Image]
         }
        ]
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.pro_all_acception = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'developer_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'developer_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findAll({
        where:{
            project_ID:req.body.project_ID,
            client_ID: req.body.client_ID
          },
          include:[{
              model:User,include:[Image]
         }
        ]
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.pro_req_pro = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Request_project,{foreignKey: 'developer_ID'})
    Request_project.belongsTo(User,{foreignKey: 'developer_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})


    Request_project.findAll({
      where:{
        project_ID: req.body.project_ID
      },
      include:[{
          model:Project,
        where:{
            client_ID:req.body.client_ID
        }
     }, {model: User, include:[Image]} 
    ] 
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}