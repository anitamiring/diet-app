import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeCreateComponent } from "./recipe/recipe-create/recipe-create.component";
import { AppRoutingModule } from './app-routing.module';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
