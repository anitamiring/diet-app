import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: "root"})

export class IngredientService
{
  constructor(private http: HttpClient) {}

  getIngredients()
  {
    this.http.get<{message:string, ingedient:any}>("https://api.nal.usda.gov/fdc/v1/food/324593?api_key=orKjbvmhPBg5rPbhAR36JXT5gSv7dexkaNwVkTrl")
      .subscribe( ingredientData => console.log(ingredientData));
  }

  getIngredientsList()
  {
    this.http.get<{message:string, ingedient:any}>("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=orKjbvmhPBg5rPbhAR36JXT5gSv7dexkaNwVkTrl")
      .subscribe( ingredientData => console.log(ingredientData));
  }

}
