const express = require("express")
const patientRoute = require("./routes/patient.route")
const visitationRoute = require("./routes/visitation.route")

const app = express()

app.use("/patients",patientRoute)
app.use("/visitation",visitationRoute)

module.exports = app