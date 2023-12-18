const express = require("express")
const patientRoute = require("./routes/patient.route")
const visitationRoute = require("./routes/visitation.route")
const patientVitalsRoute = require("./routes/pvitals.route")

const app = express()

app.use(express.json());

app.use("/api/patients",patientRoute)
app.use("/api/visitation",visitationRoute)
app.use("/api/patient_vitals",patientVitalsRoute)

module.exports = app