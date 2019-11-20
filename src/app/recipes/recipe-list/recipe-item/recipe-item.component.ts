import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../../recipie.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipe(1);
    // console.log('route' + this.route.snapshot);
    // const id = this.route.snapshot.params['id'];
    // console.log('id ' + id);
    // const params = this.route.snapshot.params;
    // console.log('YYYYYYYYYYYYYYYY ' + params);

    // this.route.params.subscribe(
    //   (parameters: Params) => {
    //     this.recipe = this.recipeService.getRecipe(1);
    //     console.log('zzzzzzzz ' + parameters);
    //
    //   }
    // );

  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
