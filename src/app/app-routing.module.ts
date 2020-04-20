import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeCreateComponent } from "./recipe/recipe-create/recipe-create.component";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { RecipeComponent } from './recipe/recipe.component';



const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'ingredient', component: IngredientComponent},
  { path: 'create', component: RecipeCreateComponent },
  { path: 'planner', component: RecipeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

