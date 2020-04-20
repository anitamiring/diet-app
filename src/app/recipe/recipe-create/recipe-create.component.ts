import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  enteredTitle = "";
  enteredContent = "";

  // form: FormGroup;

  constructor(public recipeService: RecipeService) { }

  onAddRecipe(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.recipeService.addRecipe(form.value.title, form.value.content);
    form.resetForm();
  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   title: new FormControl(null, {
    //     validators: [Validators.required, Validators.minLength(3)]
    //   }),
    //   content: new FormControl(null, {
    //     validators: [Validators.required]
    //   })
    // });
  }

}
