const { default: visitation_model } = require("../models/visitation.model")


async function HTTPGetVisitations(req,res){
    const visitation = await visitation_model.find()
    res.status(200).json(visitation)
}

async function HTTPCreateVisitations(req,res){
    const {patient_id,data_and_time,type_of_encounter
    } = req.body

    const visitation = new visitation_model({
        patient_id:patient_id,
        data_and_time:data_and_time,
        type_of_encounter:type_of_encounter
    })

    if(visitation){
        res.status(200).json({message:"Visitation created successfully"})
    }else{
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = {
    HTTPGetVisitations,HTTPCreateVisitations
}