const express = require("express")
const patientRoute = require("./routes/patient.route")

const app = express()

app.use("/patients",patientRoute)

module.exports = app