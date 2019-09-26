const Request_project = require("../models/Request_project")
const Project = require("../models/Project")
const User = require("../models/User")
const Image = require("../models/Image")

const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.send_request = (req,res)=>{
    const requestData = {
        project_ID: req.body.project_ID,
        developer_ID: req.body.developer_ID,
        isViewed: req.body.isViewed,
        isAccepted: req.body.isAccepted
    }
    
     Request_project.create(requestData)
     .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
    
}

exports.cancle_request = (req,res)=>{
    
    Request_project.destroy({
         where:{
             project_ID : req.body.project_ID,
             developer_ID: req.body.developer_ID
         }
 
     })
     .then(request=>{
         if(request)
         res.json(request)
     })
     .catch(err =>{
         res.send('error:'+err)
     })
 }


 exports.get_request = (req,res)=>{
    
    Request_project.findOne({
        where:{
           project_ID : req.body.project_ID,
           developer_ID: req.body.developer_ID
        }
       })
       .then(request=>{
           if(request)
           res.json(request)
       })
       .catch(err =>{
           res.send('error:'+err)
       })
   
}


exports.count_request = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    Request_project.count({
      where:{
        isViewed: false,
        isAccepted: false
      },
      include:[{
          model:Project,
        where:{
            client_ID:req.body.client_ID
        }
     }]
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.new_all_req = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Request_project,{foreignKey: 'developer_ID'})
    Request_project.belongsTo(User,{foreignKey: 'developer_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})


    Request_project.findAll({
      where:{
        isViewed: false,
        isAccepted: false
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


exports.old_all_req = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Request_project,{foreignKey: 'developer_ID'})
    Request_project.belongsTo(User,{foreignKey: 'developer_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})



    Request_project.findAll({
      where:{
        isViewed: true,
        isAccepted: false
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


exports.view_request = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Request_project,{foreignKey: 'developer_ID'})
    Request_project.belongsTo(User,{foreignKey: 'developer_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_project.findOne({
      where:{
        id:req.body.notification_ID,
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
        Request_project.update({
            isViewed:true
        },{
            where:{
              id: req.body.notification_ID
            }
        })
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.accept_project = (req,res)=>{

    Request_project.update({
        isAccepted:true,
        isViewd: false
    },{
        where:{
            id: req.notification_ID,
            developer_ID: req.body.developer_ID
        }
    })
}


exports.view_project_request = (req,res)=>{

    User.hasMany(Request_project,{foreignKey: 'developer_ID'})
    Request_project.belongsTo(User,{foreignKey: 'developer_ID'})
    
    Request_project.findAll({
        where:{
            project_ID: req.body.id
        },
        include:[User]
    })
    .then(result=>{
        res.json(result)

    })

}



exports.count_accept_pro_req = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    Request_project.count({
      where:{
        isViewedAccept: false,
        isAccepted: true,
        developer_ID: req.body.developer_ID
      }
    })
    .then(result=>{
        res.json(result)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.new_all_acc_pro_req = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey:'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_project.findAll({
        where:{
            developer_ID: req.body.developer_ID,
            isAccepted: true,
            isViewedAccept: false
        },
        include:{
            model:Project, 
            include:{
                model:User, include:[Image]}
        }
    }).then(result=>{
        res.json(result)
    })
}


exports.old_all_acc_pro_req = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey:'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_project.findAll({
        where:{
            developer_ID: req.body.developer_ID,
            isAccepted: true,
            isViewedAccept: true
        },
        include:{
            model:Project, 
            include:{
                model:User, include:[Image]}
        }
    }).then(result=>{
        res.json(result)
    })
}



exports.view_acc_pro_req = (req,res)=>{

    Project.hasMany(Request_project,{foreignKey: 'project_ID'})
    Request_project.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasMany(Project,{foreignKey:'client_ID'})
    Project.belongsTo(User,{foreignKey: 'client_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_project.findOne({
        where:{
            id: req.body.notification_ID
        },
        include:{
            model:Project, 
            include:{
                model:User, include:[Image]}
        }
    }).then(result=>{
        Request_project.update({
            isViewedAccept:true
        },{
            where:{
              id: req.body.notification_ID
            }
        })
        res.json(result)
    })
}



