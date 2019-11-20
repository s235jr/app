import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../recipie.service';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.recipe = this.recipeService.getRecipe(id);
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
