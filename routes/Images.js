const express = require("express")
const image = express.Router()
const cors = require("cors")
var multer  = require('multer');
image.use(cors())

const image_cont = require("../controllers/Images")


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});

var upload = multer({
  storage: storage,
  limits: { fileSize: '4M'}
});

image.post('/sendID',image_cont.get_user_id)

image.post('/proImage',upload.single('profileImage'),image_cont.profile_image)

image.post('/checkProfile',image_cont.check_image)


module.exports = image