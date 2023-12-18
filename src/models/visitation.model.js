const { Schema, model } = require("mongoose");

const visitation = new Schema({
    patientID: {
        type: String,
        required: true
    },
    date_and_time: {
        type: String,
        required: true
    },
    type_of_encounter: {
        type: String,
        required: true
    }
});

const visitation_model = model("visitation", visitation);
module.exports = visitation_model;
