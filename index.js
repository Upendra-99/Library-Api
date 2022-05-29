const http = require("http");
const App = require("./Routes/libraryRoute");
const mongodbConnection = require("./DBConnection/mongodb");
require("dotenv").config();

const port = process.env.PORT;

http.createServer(App).listen(port, () => {
  // connect to MongoDB
  new mongodbConnection();

  console.log(`server is runnin on port no ${port}`);
});
