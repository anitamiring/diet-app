import { Component, OnInit } from '@angular/core';

import { Ingredient } from './ingredient.model';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredient: Ingredient = {
    id: 1223,
    name: "First ingredient",
    amount: 100,
    calories: 100,
    proteins: 20,
    fats: 20,
    carbs: 60
  };

  constructor(public ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getIngredientsListPage();
  }

}
