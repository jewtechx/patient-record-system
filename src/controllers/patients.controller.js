const { default: patient_model } = require("../models/patients.model")

async function HTTPGetPatients(req,res){
    const patients = await patient_model.find()
    res.status(200).json(patients)
}

async function HTTPCreatePatients(req,res){
    const {patient_id,surname,othernames,gender,phone_number,residential_address,emergency_name,contact,relationship} = req.body

    const patient = new patient_model({
        patient_id,surname,othernames,gender,phone_number,residential_address,emergency_name,contact,relationship
    })

    if(patient){
        res.status(200).json({message:"Patient created successfully"})
    }else{
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = {
    HTTPGetPatients,HTTPCreatePatients
}