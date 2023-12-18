const mongoose = require("mongoose")

const DBURI = "mongodb+srv://jwlarbi15:patient@cluster0.wobks2b.mongodb.net/patient_record_system"

mongoose.connection.once("open", () => {
    console.log("Database connected and ready for work")
})

mongoose.connection.on("error", () => {
    console.log("Error connection to database")
})
async function connectToDB(){
    await mongoose.connect(DBURI)
}

module.exports = connectToDB
