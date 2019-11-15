import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('First recipe',
      'First description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Second recipe',
      'Second description',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/' +
      'huli-huli-chicken-wings-ft-recipe0619.jpg?itok=4ltg7GWT')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
