import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  enteredTitle = "";
  enteredContent = "";
  recipe: Recipe;
  private mode = "create";
  private recipeId: string;

  constructor(public recipeService: RecipeService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('recipeId')){
        this.mode = "edit";
        this.recipeId = paramMap.get('recipeId');
        this.recipeService.getRecipe(this.recipeId)
          .subscribe(recipeData => {
            this.recipe = {id: recipeData._id, title: recipeData.title, content: recipeData.content}
          });
      }
      else {
        this.mode = "create";
        this.recipeId = null;
      }
    });
  }

  onSaveRecipe(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if(this.mode === "create") {
      this.recipeService.addRecipe(form.value.title, form.value.content);
    } else {
      this.recipeService.updateRecipe(this.recipeId,form.value.title, form.value.content )
    }

    form.resetForm();
  }


    // this.form = new FormGroup({
    //   title: new FormControl(null, {
    //     validators: [Validators.required, Validators.minLength(3)]
    //   }),
    //   content: new FormControl(null, {
    //     validators: [Validators.required]
    //   })
    // });


}
