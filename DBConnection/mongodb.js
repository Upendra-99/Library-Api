const mongoose = require("mongoose");
require("dotenv").config({ path: "./env/.env" });

class mongo {
  constructor() {
    this.mongodbConnection();
  }
  mongodbConnection() {
    mongoose
      .connect(process.env.MONGOURL)
      .then(() => {
        console.log("Database is connected");
      })
      .catch(() => {
        console.log("Database connection error occured");
      });
  }
}

module.exports = mongo;
