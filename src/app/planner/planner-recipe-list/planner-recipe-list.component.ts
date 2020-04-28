import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planner-recipe-list',
  templateUrl: './planner-recipe-list.component.html',
  styleUrls: ['./planner-recipe-list.component.css']
})
export class PlannerRecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipeSub: Subscription;

  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes();
    this.recipeSub = this.recipeService.getRecipeUpdateListener()
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }

}
