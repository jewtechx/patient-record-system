const express = require("express")
const { HTTPGetVisitations, HTTPCreateVisitations } = require("../controllers/visitation.controller")

const visitationRoute = express.Router()

visitationRoute.get('/',HTTPGetVisitations)
visitationRoute.post('/create_visitation',HTTPCreateVisitations)

module.exports = visitationRoute