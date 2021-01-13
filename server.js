const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/post", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
