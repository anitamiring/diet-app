import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { mimeType } from './mime-type.validator';


@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  enteredTitle = "";
  enteredContent = "";
  recipe: Recipe;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private recipeId: string;

  constructor(public recipeService: RecipeService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('recipeId')){
        this.mode = "edit";
        this.recipeId = paramMap.get('recipeId');
        this.recipeService.getRecipe(this.recipeId)
          .subscribe(recipeData => {
            this.recipe = {
                id: recipeData._id,
                title: recipeData.title,
                content: recipeData.content,
                imagePath: recipeData.imagePath
            }
            this.form.setValue({
              title: this.recipe.title,
              content: this.recipe.content
            })
          });
      }
      else {
        this.mode = "create";
        this.recipeId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  onSaveRecipe() {
    if (this.form.invalid) {
      return;
    }
    if(this.mode === "create") {
      this.recipeService.addRecipe(this.form.value.title, this.form.value.content, this.form.value.image);
    } else {
      this.recipeService.updateRecipe(this.recipeId,this.form.value.title, this.form.value.content, this.form.value.image )
    }

    this.form.reset();
  }







}
