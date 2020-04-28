import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner.component';
import { PlannerRecipeComponent } from './planner-recipe/planner-recipe.component';
import { PlannerRecipeListComponent } from './planner-recipe-list/planner-recipe-list.component';


const routes: Routes = [
  {
    path: '', component: PlannerComponent, children: [
      { path: 'breakfast', component: PlannerRecipeComponent},
      { path: 'snack', component: PlannerRecipeComponent},
      { path: 'lunch', component: PlannerRecipeComponent},
      { path: 'breakfast/add', component: PlannerRecipeListComponent},
      { path: 'snack/add', component: PlannerRecipeListComponent},
      { path: 'lunch/add', component: PlannerRecipeListComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule { }
