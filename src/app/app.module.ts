import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from "./header/header.component";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeCreateComponent } from "./recipe/recipe-create/recipe-create.component";
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientComponent,
    RecipeComponent,
    RecipeCreateComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatTabsModule,
    MatSortModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
