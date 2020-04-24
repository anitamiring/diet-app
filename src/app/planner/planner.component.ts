import 'angular-calendar/css/angular-calendar.css';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Observable, Subscription } from 'rxjs';
import { RecipeService } from '../recipe/recipe.service';



export interface Link {
  label: string;
  path: string;
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  viewDate: Date = new Date();
  events: [];
  recipes: Recipe[] = [];
  private recipeSub: Subscription;

  navLinks: Link[] = [
    {label: 'Brakfast', path: './breakfast' },
    {label: 'Snack', path: './snack' },
    {label: 'Lunch', path: './lunch' }
  ];

  constructor(public recipeService: RecipeService) {

  }

  ngOnInit() {

  }


}
