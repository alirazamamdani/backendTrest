const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bp = require("body-parser");
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/Product", (req, res) => {
  res.send("Prodcut Page");
});

app.get("/Product/:id", (req, res) => {
  res.send("Product Item Page");
});
app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
