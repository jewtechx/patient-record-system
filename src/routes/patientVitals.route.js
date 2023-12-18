const express = require("express")
const { HTTPCreatePVitals, HTTPGetPVitals } = require("../controllers/pvitals.controller")

const patientVitalsRoute = express.Router()

patientVitalsRoute.get('/',HTTPGetPVitals)
patientVitalsRoute.post('/create_patients_vitals',HTTPCreatePVitals)

module.exports = patientVitalsRoute