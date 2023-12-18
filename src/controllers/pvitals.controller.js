const patient_model = require("../models/patients.model")


async function HTTPGetPVitals(req,res){
    const visitation = await visitation_model.find()
    res.status(200).json(visitation)
}

async function HTTPCreatePVitals(req,res){
    const {patientID,
    blood_pressure,
    temperature,
    pulse,
    spo2,
    } = req.body

    const pvitals = new patient_model({
        patientID:patientID,
    blood_pressure:blood_pressure,
    temperature:temperature,
    pulse:pulse,
    spo2:spo2,
    })

    if(pvitals){
        res.status(200).json({message:"Patient vitals created successfully"})
    }else{
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = {
    HTTPGetPVitals,HTTPCreatePVitals
}