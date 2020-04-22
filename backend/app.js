const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const recipesRoutes = require("./routes/recipes");

const app = express();

mongoose.connect("mongodb+srv://Swizzle:zVu5hjp3ORpa2oVD@cluster0-wmqz8.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true } )
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Failed to connect!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

app.use("/api/recipes", recipesRoutes);



module.exports = app;
