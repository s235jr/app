import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<void>();

  @Input() recipe;

  constructor() {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
