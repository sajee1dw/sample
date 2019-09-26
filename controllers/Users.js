const User = require("../models/User") 
const Skill = require("../models/Skill")
const Image = require("../models/Image")
const jwt = require("jsonwebtoken")

process.env.SECRET_KEY = 'secret'

const ImageData = {
    user_ID :0 ,
    image_name :'',
}


exports.dev_register = (req,res)=>{

    const userData = {
        first_name : req.body.first_name,
        last_name :req.body.last_name,
        user_type : req.body.user_type,
        email : req.body.email,
        password : req.body.password,
        gender : req.body.gender,
        contact_no : req.body.contact_no,
        isActivated : req.body.isActivated
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user=>{
        if(!user){
            User.create(userData)
            .then(user =>{

                ImageData.user_ID= user.id
                ImageData.image_name= "default.png"

                Image.create(ImageData)

                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token})

                
            })
            .catch(err =>{
                res.send('error:'+err)
            })

        }else{
            res.send('User already exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.cli_register=(req,res)=>{

    const userData = {
        first_name : req.body.first_name,
        last_name :req.body.last_name,
        user_type : req.body.user_type,
        email : req.body.email,
        password : req.body.password,
        gender : req.body.gender,
        contact_no : req.body.contact_no,
        isActivated : req.body.isActivated
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user=>{
        if(!user){
            User.create(userData)
            .then(user =>{

                ImageData.user_ID= user.id
                ImageData.image_name= "default.png"

                Image.create(ImageData)

                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token})
            })
            .catch(err =>{
                res.send('error:'+err)
            })
        }else{
            res.send('User already exists')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.login=(req,res)=>{
    User.findOne({
        where:{
            email: req.body.email,
        }
    })
    .then(user =>{
        User.findOne({
            where:{
                email: user.email,
                password: req.body.password
            }
        })
        .then(user =>{
            if(user.isActivated == true){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.json({ token: token})
            }else{
                res.send('You have banned temporarly or permanently')
            }
        })
        .catch(err =>{
            res.send('Password is incorrect')
        })
    })
    .catch(err =>{
        res.send('You have to register before login')
    })
}



exports.profile=(req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        where : {
            id: decoded.id
        }
    })
    .then(user =>{
        if(user){
            res.json(user)
        }else{
            res.send('User does not exist')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}



exports.skill = (req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    Skill.findOne({
        where : {
            user_ID: decoded.id
        }
    })
    .then(skill =>{
        if(skill){
            res.json(skill)
        }else{
            res.send('Skill does not exist')
        }
    })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.edit_profile=(req,res)=>{

    User.update({
        first_name : req.body.first_name,
        last_name :req.body.last_name,
        user_type : req.body.user_type,
        email : req.body.email,
        password : req.body.password,
        gender : req.body.gender,
        contact_no : req.body.contact_no,
        isActivated: req.body.isActivated
    },{
        where:{
            id:req.body.id
        }
    })

   User.findOne({
        where:{
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(user=>{
        let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
            expiresIn:1440
        })
        res.json({token:token})
    })
    .catch(err =>{
        res.send('error:'+err)
    })

}