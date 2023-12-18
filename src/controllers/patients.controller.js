const patient_model = require("../models/patients.model");
const uuid  = require("uuid")

async function HTTPGetPatients(req, res) {
    try {
        const patients = await patient_model.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

    async function HTTPCreatePatients(req, res) {
        const {
            surname,
            other_names,
            gender,
            phone_number,
            residential_address,
            emergency_name,
            contact,
            relationship
        } = req.body;

        const patient = new patient_model({
            patientID: uuid.v4(),
            surname: surname,
            other_names: other_names,
            gender: gender,
            phone_number: phone_number,
            residential_address: residential_address,
            emergency_name: emergency_name,
            contact: contact,
            relationship: relationship
        });

        const savedPatient = await patient.save();

        if (savedPatient) {
            res.status(201).json({ message: "Patient created successfully" });
        } else {
            res.status(500).json({ error: "Error creating patient details" });
        }

}

module.exports = {
    HTTPGetPatients,
    HTTPCreatePatients
};
