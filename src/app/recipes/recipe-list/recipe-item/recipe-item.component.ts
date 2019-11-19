import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../../recipie.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
