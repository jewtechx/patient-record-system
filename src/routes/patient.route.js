const express = require("express")
const { HTTPGetPatients, HTTPCreatePatients } = require("../controllers/patients.controller")

const patientRoute = express.Router()

patientRoute.get('/',HTTPGetPatients)
patientRoute.post('/create_patient',HTTPCreatePatients)

module.exports = patientRoute