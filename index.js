const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello from about me page");
});

app.listen(port, () => {
  console.log(`Serve is listening at ${port}`);
});
