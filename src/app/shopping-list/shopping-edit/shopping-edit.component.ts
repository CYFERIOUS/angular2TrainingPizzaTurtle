import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/recipes/share/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;

  constructor(private shpLS:ShoppingListService) { }

  ngOnInit(): void {}

  onCreateIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement){
    console.log(nameInput.value);
    const newIngredient = new Ingredient(nameInput.value,amountInput.valueAsNumber);
    this.shpLS.onAddIngredient(newIngredient);
  }

}
