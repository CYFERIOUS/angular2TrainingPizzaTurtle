import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/share/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private shpLS:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shpLS.getShoppingList();
    this.shpLS.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
    });
  }
  

  

}
