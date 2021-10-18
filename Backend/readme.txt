### MERN STACK ### 

# Create Server

1 --> npm init -y      //creating package.json

2 --> npm i express    //installing express

3 --> npm i nodemon    //install nodemon to run nodejs

# Middleware

const middleware = (req, res, next) => {
  console.log("I am middleware");
  next();
};


# DATABASE Connectivity :

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

# dot env :

installation : npm install dotenv

require dotenv

create --> config.env file  --> type null > config.env