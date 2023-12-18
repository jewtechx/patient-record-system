const express = require("express")

const patientVitalsRoute = express.Router()

patientVitalsRoute.get('/',HTTPCreatePatientsVitals)
patientVitalsRoute.post('/create_patients_vitals',HTTPCreatePatientsVitals)

module.exports = patientVitalsRoute