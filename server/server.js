const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello, World from Express.js server!");
  res.status(200).send({ message: "Data received!!!" });
});

app.post("/enroll", function (req, res) {
  console.log(req.body);
  res.status(401).send({ message: "Unauthorized!!!" });
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
