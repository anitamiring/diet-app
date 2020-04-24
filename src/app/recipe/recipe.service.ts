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
            id: recipe._id,
            imagePath: recipe.imagePath
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
    return this.http.get<{_id:string, title:string, content:string, imagePath: string }>("http://localhost:3000/api/recipes/" + id);
  }

  addRecipe(title: string, content: string, image: File) {
    const recipeData = new FormData();
    recipeData.append("title", title);
    recipeData.append("content", content);
    recipeData.append("image", image, title);
    this.http
      .post<{ message: string, recipe: Recipe }>("http://localhost:3000/api/recipes", recipeData)
      .subscribe(responseData => {
        const recipe: Recipe = {
          id: responseData.recipe.id,
          title: title,
          content: content,
          imagePath: responseData.recipe.imagePath
        };
        this.recipes.push(recipe);
        this.recipesUpdated.next([...this.recipes]);
        this.router.navigate(["/"]);
      });
  }

  updateRecipe(id: string, title: string, content: string, image: File | string) {
    let recipeData: Recipe | FormData;
    if (typeof image === "object") {
      recipeData = new FormData();
      recipeData.append("id", id);
      recipeData.append("title", title);
      recipeData.append("content", content);
      recipeData.append("image", image, title);
    } else {
      recipeData = {
        id: id,
        title: title,
        content: content,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/recipes/" + id, recipeData)
      .subscribe( (res) => {
        const updatedRecipes = [...this.recipes];
        const oldRecipeIndex = updatedRecipes.findIndex(rec => rec.id === id);
        const recipe: Recipe = {
          id: id,
          title: title,
          content: content,
          imagePath: ""
        };
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


