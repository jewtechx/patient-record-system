const {Schema,model} = require("mongoose") 

const patient = new Schema({
    patientID:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    other_names:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    residential_address:{
        type:String,
        required:true
    },
    emergency_name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    relationship:{
        type:String,
        required:true
    },
})

const patient_model = model("Patients",patient)
export default patient_model 