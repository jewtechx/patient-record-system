const pvitals_model = require("../models/pvitals.model");

async function HTTPGetPVitals(req, res) {
    try {
        const pvitals = await pvitals_model.find();
        res.status(200).json(pvitals);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function HTTPCreatePVitals(req, res) {
    try {
        const { patientID, blood_pressure, temperature, pulse, spo2 } = req.body;

        const newPVitals = new pvitals_model({
            patientID: patientID,
            blood_pressure: blood_pressure,
            temperature: temperature,
            pulse: pulse,
            spo2: spo2,
        });

        const savedPVitals = await newPVitals.save();

        if (savedPVitals) {
            res.status(201).json({ message: "Patient vitals created successfully" });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    HTTPGetPVitals,
    HTTPCreatePVitals
};
