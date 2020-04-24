import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner.component';
import { PlannerRecipeComponent } from './planner-recipe/planner-recipe.component';


const routes: Routes = [
  {
    path: '', component: PlannerComponent, children: [
      { path: 'breakfast', component: PlannerRecipeComponent},
      { path: 'snack', component: PlannerRecipeComponent},
      { path: 'lunch', component: PlannerRecipeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule { }
