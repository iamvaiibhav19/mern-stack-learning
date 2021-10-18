const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://iamvaiibhav:vaibhav123@cluster0.3tavh.mongodb.net/mernstack?retryWrites=true&w=majority";

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
