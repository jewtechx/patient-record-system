const express = require("express")

const visitationRoute = express.Router()

visitationRoute.get('/',HTTPGetVisitations)
visitationRoute.post('/create_visitation',HTTPCreateVisitations)

module.exports = visitationRoute