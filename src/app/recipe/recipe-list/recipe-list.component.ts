import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service"


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{

  recipes: Recipe[] = [];
  private recipeSub: Subscription;

  constructor(public recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes();
    this.recipeSub = this.recipeService.getRecipeUpdateListener()
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  onDelete(recipeId: string) {
    this.recipeService.deleteRecipe(recipeId);
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }

}
