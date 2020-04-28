import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerRecipeComponent } from './planner-recipe/planner-recipe.component';
import { PlannerComponent } from './planner.component'
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { PlannerRecipeListComponent } from './planner-recipe-list/planner-recipe-list.component';


@NgModule({
  declarations: [
    PlannerRecipeComponent,
    PlannerComponent,
    PlannerRecipeListComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class PlannerModule { }
