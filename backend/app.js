const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Recipe = require("./models/recipe");

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
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/recipes", (req, res, next) => {
  const recipe = new Recipe({
    title: req.body.title,
    content: req.body.content
  });
  recipe.save().then( createdRecipe => {
    res.status(201).json({
      message: 'Recipe added successfully',
      recipeId: createdRecipe._id
    });
  });
});

app.get("/api/recipes", (req, res, next) => {
  Recipe.find()
    .then(documents => {
      res.status(200).json({
        message: "Recipes fetched successfully!",
        recipes: documents
      });
    });
});

app.delete("/api/recipes/:id", (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id }).then( result => {
    console.log(result);
    res.status(200).json({
      message: "Recipe deleted!"
    });
  });
});

module.exports = app;
