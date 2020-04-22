import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

import { Recipe } from "./recipe.model";


@Injectable({ providedIn: "root" })
export class RecipeService {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getRecipes() {
    this.http
      .get<{ message: string; recipes: any }>(
        "http://localhost:3000/api/recipes"
      )
      .pipe(map(recipeData => {
        return recipeData.recipes.map( recipe => {
          return {
            title: recipe.title,
            content: recipe.content,
            id: recipe._id
          }
        })
      }))
      .subscribe(transRecipeData => {
        this.recipes = transRecipeData;
        this.recipesUpdated.next([...this.recipes]);
      });
  }

  getRecipeUpdateListener() {
    return this.recipesUpdated.asObservable();
  }

  getRecipe(id: string) {
    return this.http.get<{_id:string, title:string, content:string }>("http://localhost:3000/api/recipes/" + id);
  }

  addRecipe(title: string, content: string) {
    const recipe: Recipe = { id: null, title: title, content: content };
    this.http
      .post<{ message: string, recipeId: string }>("http://localhost:3000/api/recipes", recipe)
      .subscribe(responseData => {
        const recipeId = responseData.recipeId;
        recipe.id = recipeId;
        console.log(responseData.message);
        this.recipes.push(recipe);
        this.recipesUpdated.next([...this.recipes]);
        this.router.navigate(["/"]);
      });
  }

  updateRecipe(id: string, title: string, content: string) {
    const recipe: Recipe = {id: id, title: title, content: content};
    this.http
      .put("http://localhost:3000/api/recipes/" + id, recipe)
      .subscribe( (res) => {
        const updatedRecipes = [...this.recipes];
        const oldRecipeIndex = updatedRecipes.findIndex(rec => rec.id === recipe.id);
        updatedRecipes[oldRecipeIndex] = recipe;
        this.recipes = updatedRecipes;
        this.recipesUpdated.next([...this.recipes]);
        this.router.navigate(["/"]);
      });
  }

  deleteRecipe(recipeId: string) {
    this.http
      .delete("http://localhost:3000/api/recipes/" + recipeId)
      .subscribe( () => {
        const updatedRecipes = this.recipes.filter( recipe => recipe.id != recipeId);
        this.recipes = updatedRecipes;
        this.recipesUpdated.next([...this.recipes]);
      });
  }
}
