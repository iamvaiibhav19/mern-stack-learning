const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const mongoURL = process.env.DATABASE;

const connectToMongo = () => {
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Connected to Mongo Successfully");
    })
    .catch(() => {
      console.log("Not Connected to Mongo");
    });
};

module.exports = connectToMongo;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreteIndex: true,
//     useUnifiedTopology: true,
//     useFindandModify: false,
//   })
//   .then(() => {
//     console.log("Successfully connected to Mongo");
//   })
//   .catch(() => {
//     console.log("No connection found!");
//   });
