import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeCreateComponent } from "./recipe/recipe-create/recipe-create.component";
import { AppRoutingModule } from './app-routing.module';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
