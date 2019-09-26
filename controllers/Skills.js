const Skill = require("../models/Skill")

exports.add_skill = (req,res)=>{

    const skillData={
        user_ID: req.body.user_ID,
        user_email: req.body.user_email,
        web_skill: req.body.web_skill,
        design_skill: req.body.design_skill,
        writing_skill: req.body.writing_skill,
        data_skill: req.body.data_skill,
        other_skill: req.body.other_skill,

    }

    Skill.create(skillData)
    .then(skill=>{
        res.json(skill)
        })
    .catch(err =>{
        res.send('error:'+err)
    })
}


exports.update_skill = (req,res)=>{

    Skill.update({
        user_ID: req.body.user_ID,
        user_email: req.body.user_email,
        web_skill: req.body.web_skill,
        design_skill: req.body.design_skill,
        writing_skill: req.body.writing_skill,
        data_skill: req.body.data_skill,
        other_skill: req.body.other_skill,

    },{
        where:{
            user_ID:req.body.user_ID
        }
    })

}