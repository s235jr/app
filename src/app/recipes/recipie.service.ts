import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/Ingredient';

export class RecipeService {

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
      ]),
    new Recipe(
      3,
      'Ciasto',
      'Sernik',
      'https://d3iamf8ydd24h9.cloudfront.net/pictures/articles/2018/08/98864-v-900x556.jpg',
      [
        new Ingredient('Ser', 22),
        new Ingredient('Truskawki', 11)
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
