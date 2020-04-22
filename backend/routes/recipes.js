const express = require("express");

const router = express.Router();

const Recipe = require("../models/recipe");

router.post("", (req, res, next) => {
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

router.put("/:id", (req, res, next) => {
  const recipe = new Recipe({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  })
  Recipe.updateOne({_id: req.params.id}, recipe)
    .then(res => {
      console.log(res);
      res.status(200).json({
        message: "Recipe patched!"
      })
    });
})

router.get("", (req, res, next) => {
  Recipe.find()
    .then(documents => {
      res.status(200).json({
        message: "Recipes fetched successfully!",
        recipes: documents
      });
    });
});

router.get("/:id", (req, res, next) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      if(recipe){
        res.status(200).json(recipe);
      } else {
        res.status(404).json({
          message: "Recipe not found!"
        })
      }
    })
})

router.delete("/:id", (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id }).then( result => {
    console.log(result);
    res.status(200).json({
      message: "Recipe deleted!"
    });
  });
});


module.exports = router;
