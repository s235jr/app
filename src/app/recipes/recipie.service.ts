import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Żeberka',
      'Pieczone żeberka',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Skrzydełka',
      'Pieczone skrzydełka z warzywami',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/' +
      'huli-huli-chicken-wings-ft-recipe0619.jpg?itok=4ltg7GWT')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
