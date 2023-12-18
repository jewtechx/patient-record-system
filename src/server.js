const http = require("http")

const app = require("./app")
const connectToDB = require("./utils/mongoose")

const PORT = 8080

const server = http.createServer(app)

async function startServer(){
  await connectToDB()
  server.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()