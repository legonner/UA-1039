const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());

app.use(express.static("public")); 

app.post("/vote", (req, res) => {
  const timestamp = new Date();
  res.json({ timestamp: timestamp });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
