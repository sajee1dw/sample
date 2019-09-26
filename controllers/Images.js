
const Image = require("../models/Image")

const ImageData = {
  user_ID :0 ,
  image_name :'',
}

exports.get_user_id = (req,res)=>{
    ImageData.user_ID = req.body.user_ID
}

exports.profile_image = (req, res, next)=> {
    if(!req.file) {
      res.status(500);
      return next(err);
    }else{
      ImageData.image_name = req.file.filename

      Image.update({
        image_name: req.file.filename
      },
      {
        where:{
          user_ID : ImageData.user_ID
      }
      })

      res.json({ fileUrl: 'http://localhost:3000/' + req.file.filename });
    }
  }


exports.check_image = (req,res)=>{
    Image.findOne({
      where: {
          user_ID : req.body.user_ID
      }
  })
  .then(user=>{
      if(user){
        res.json({ fileUrl: 'http://localhost:3000/' + user.image_name });
      }else{
        res.send('Profile is not exsist')
      }
  })
  .catch(err =>{
      
    })
  }