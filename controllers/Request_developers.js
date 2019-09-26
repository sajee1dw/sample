const Request_developer = require("../models/Request_developer")
const Project = require("../models/Project")
const User = require("../models/User")
const Image = require("../models/Image")
const Conirmed_project = require("../models/Confirmed_project")

exports.send_request = (req,res)=>{
    const requestData = {
        client_ID: req.body.client_ID,
        project_ID: req.body.project_ID,
        developer_ID: req.body.developer_ID,
        isViewed: req.body.isViewed,
        isAccepted: req.body.isAccepted,
        isViewedByCli: false
    }
    
     Request_developer.create(requestData)
     .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
    
}


exports.cancle_request = (req,res)=>{
    
    Request_developer.destroy({
         where:{
             client_ID : req.body.client_ID,
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


 exports.get_all_request = (req,res)=>{

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})
    
        Request_developer.findAll({
            where:{
                client_ID: req.body.client_ID,
                developer_ID: req.body.developer_ID
            },
            include:[Project]
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

    Request_developer.count({
      where:{
        isViewed:false,
        developer_ID:req.body.developer_ID
      }
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.new_all_request = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'client_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findAll({
        where:{
            isViewed:false,
            developer_ID: req.body.developer_ID
          },
          include:[{
              model:User,include:[Image]
         },{model:Project}
        ]
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.old_all_request = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'client_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findAll({
        where:{
            isViewed:true,
            developer_ID: req.body.developer_ID
          },
          include:[{
              model:User,include:[Image]
         },{model:Project}
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

    User.hasMany(Request_developer,{foreignKey: 'client_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'client_ID'})

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findOne({
        where:{
          id: req.body.notification_ID,
          developer_ID: req.body.developer_ID
        },
        include:[{
            model:User,include:[Image]
       },{model:Project}
      ]
      })
      .then(request=>{
          Request_developer.update({
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



exports.accept_req_dev = (req,res)=>{

    
    Request_developer.update({
        isAccepted:true,
        isViewdByCli: false
    },{
        where:{
            id: req.body.notification_ID,
            developer_ID: req.body.developer_ID
        }
    })

}
     
    
exports.cancle_accept = (req,res)=>{

    Request_developer.update({
        isAccepted:false,
        isViewdByCli: false
    },{
        where:{
            id: req.body.notification_ID,
            developer_ID: req.body.developer_ID
        }
    })
}



exports.new_all_acception = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'developer_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'developer_ID'})

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findAll({
        where:{
            isAccepted: true,
            isViewedByCli:false,
            client_ID: req.body.client_ID
          },
          include:[{
              model:User,include:[Image]
         },{model:Project}
        ]
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.old_all_acception = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'developer_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'developer_ID'})

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findAll({
        where:{
            isAccepted: true,
            isViewedByCli:true,
            client_ID: req.body.client_ID
          },
          include:[{
              model:User,include:[Image]
         },{model:Project}
        ]
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.count_accept = (req,res)=>{

    Request_developer.count({
      where:{
          isAccepted: true,
        isViewedByCli:false,
        client_ID:req.body.client_ID
      }
    })
    .then(request=>{
        res.json(request)
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.view_dev_accept = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'developer_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'developer_ID'})

    Project.hasMany(Request_developer,{foreignKey: 'project_ID'})
    Request_developer.belongsTo(Project,{foreignKey: 'project_ID'})

    User.hasOne(Image,{foreignKey: 'user_ID'})
    Image.belongsTo(User,{foreignKey: 'user_ID'})

    Request_developer.findOne({
        where:{
          id: req.body.notification_ID,
          client_ID: req.body.client_ID
        },
        include:[{
            model:User,include:[Image]
       },{model:Project}
      ]
      })
      .then(request=>{
          Request_developer.update({
              isViewedByCli:true
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



exports.view_developer_request = (req,res)=>{

    User.hasMany(Request_developer,{foreignKey: 'developer_ID'})
    Request_developer.belongsTo(User,{foreignKey: 'developer_ID'})

    Request_developer.findAll({
        where:{
            project_ID: req.body.id
        },
        include:[User]
    })
    .then(result=>{
        res.json(result)
    })

}


