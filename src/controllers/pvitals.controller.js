

async function HTTPGetPVitals(req,res){
    const visitation = await visitation_model.find()
    res.status(200).json(visitation)
}

async function HTTPCreateVisitations(req,res){
    const {patient_id,data_and_time,type_of_encounter
    } = req.body

    const pvitals = new ({
        patient_id,data_and_time,type_of_encounter
    })

    if(patient){
        res.status(200).json({message:"Patient vitalss created successfully"})
    }else{
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = {
    HTTPGetVisitations,HTTPCreateVisitations
}