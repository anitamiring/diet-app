import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeCreateComponent } from "./recipe/recipe-create/recipe-create.component";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';



const routes: Routes = [
  { path: 'ingredient', component: IngredientComponent},
  { path: 'recipes', component: RecipeListComponent},
  { path: 'create', component: RecipeCreateComponent },
  { path: 'recipes/edit/:recipeId', component: RecipeCreateComponent },
  { path: 'planner', loadChildren: () => import(`./planner/planner.module`).then(m => m.PlannerModule) },
  { path: '', component: RecipeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

