const express = require("express")

const patientRoute = express.Router()

patientRoute.get('/',HTTPGetPatients)
patientRoute.post('/create_patient',HTTPCreatePatients)

module.exports = patientRoute