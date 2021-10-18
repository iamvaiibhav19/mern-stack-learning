const mongoose = require("mongoose");
const express = require("express");
const connectToMongo = require("./db");

const app = express();
const port = 5000;

connectToMongo();

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

//middlewares
const middleware = (req, res, next) => {
  console.log("I am middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", middleware, (req, res) => {
  console.log("I am about page");
  res.send("Hello from about me page");
});

app.listen(port, () => {
  console.log(`Serve is listening at ${port}`);
});
