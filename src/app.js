const express = require("express")
const patientRoute = require("./routes/patient.route")
const visitationRoute = require("./routes/visitation.route")
const patientVitalsRoute = require("./routes/patientVitals.route")

const app = express()

app.use("/api/patients",patientRoute)
app.use("/api/visitation",visitationRoute)
app.use("/api/pvitals",patientVitalsRoute)

module.exports = app