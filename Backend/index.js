const dotenv = require("dotenv");
const express = require("express");
const connectToMongo = require("./DB/db");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const app = express();

connectToMongo();

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

app.listen(PORT, () => {
  console.log(`Serve is listening at ${PORT}`);
});
