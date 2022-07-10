const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Film = require("./routers/film");
const cors = require("cors");
require("dotenv/config");
app.use(cors());
app.use(bodyParser.json());
app.use("/api/film", Film);
app.get("/", (req, res) => {
  res.send("oke123");
});
console.log(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true }, () => {
    console.log("Connect mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(9000);
