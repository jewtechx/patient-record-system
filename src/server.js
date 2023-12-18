const http = require("http");
const app = require("./app");
const connectToDB = require("./utils/mongoose");

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

async function startServer() {
  try {
    await connectToDB();
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error.message);
  }
}

startServer();
