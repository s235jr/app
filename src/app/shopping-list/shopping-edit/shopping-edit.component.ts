import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: false}) name: ElementRef;

  @ViewChild('amountInput', {static: false}) amount: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    this.addIngredientEvent.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }
}
