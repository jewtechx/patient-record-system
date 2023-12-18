const visitation_model  = require("../models/visitation.model");
const uuid = require("uuid")


async function HTTPGetVisitations(req, res) {
    try {
        const visitations = await visitation_model.find();
        res.status(200).json(visitations);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function HTTPCreateVisitations(req, res) {
    try {
        const { date_and_time, type_of_encounter } = req.body;

        const newVisitation = new visitation_model({
            patientID: uuid.v4(),
            date_and_time: date_and_time,
            type_of_encounter: type_of_encounter
        });

        const savedVisitation = await newVisitation.save();

        if (savedVisitation) {
            res.status(201).json({ message: "Visitation created successfully" });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    HTTPGetVisitations,
    HTTPCreateVisitations
};
