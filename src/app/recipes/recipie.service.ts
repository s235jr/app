import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/Ingredient';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Żeberka',
      'Pieczone żeberka',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Żeberka', 5),
        new Ingredient('Miód', 2)
      ]),
    new Recipe(
      2,
      'Skrzydełka',
      'Pieczone skrzydełka z warzywami',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/' +
      'huli-huli-chicken-wings-ft-recipe0619.jpg?itok=4ltg7GWT',
      [
        new Ingredient('Skrzydełka', 25),
        new Ingredient('Marchewka', 5)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.getRecipes().find(
      (s) => {
        return s.id === id;
      }
    );
  }

}
