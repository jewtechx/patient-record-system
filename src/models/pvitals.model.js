const {Schema,model} = require("mongoose") 

const pvitals = new Schema({
    patientID:{
        type:String,
        required:true
    },
    blood_pressure:{
        type:String,
        required:true
    },
    temperature:{
        type:String,
        required:true
    },
    pulse:{
        type:String,
        required:true
    },
    spo2:{
        type:String,
        required:true
    },
})

const pvitals_model = model("pvitals",pvitals)
export default pvitals_model 