const Competition = require("../models/Competition")



exports.add_competition = (req,res)=>{

    const CompetitionData={
        competition_name:req.body.competition_name,
        winning_price:req.body.winning_price
    }

    Competition.create(CompetitionData)
}