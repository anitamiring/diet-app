import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerRecipeComponent } from './planner-recipe/planner-recipe.component';
import { PlannerComponent } from './planner.component'
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PlannerRecipeComponent,
    PlannerComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class PlannerModule { }
