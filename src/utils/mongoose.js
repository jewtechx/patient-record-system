const mongoose = require("mongoose")

const DBURI = ""

mongoose.connection.once("open", () => {
    console.log("Database connected and ready for work")
})

mongoose.connection.on("error", () => {
    console.log("Error connection to database")
})
async function connectToDB(){
    await mongoose.connect(DBURI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

module.exports = connectToDB
