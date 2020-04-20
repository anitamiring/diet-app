import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Recipe } from "./recipe.model";

@Injectable({ providedIn: "root" })
export class RecipeService {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  getRecipes() {
    this.http
      .get<{ message: string; recipes: Recipe[] }>(
        "http://localhost:3000/api/recipes"
      )
      .subscribe(postData => {
        this.recipes = postData.recipes;
        this.recipesUpdated.next([...this.recipes]);
      });
  }

  getRecipeUpdateListener() {
    return this.recipesUpdated.asObservable();
  }

  addRecipe(title: string, content: string) {
    const recipe: Recipe = { id: null, title: title, content: content };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/recipe", recipe)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.recipes.push(recipe);
        this.recipesUpdated.next([...this.recipes]);
      });
  }
}
