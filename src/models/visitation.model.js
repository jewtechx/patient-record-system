const {Schema,model} = require("mongoose") 

const visitation = new Schema({
    patientID:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    type_of_encounter:{
        type:String,
        required:true
    }
})

const visitation_model = model("visitaion",visitation)
export default visitation_model 