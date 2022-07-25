import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../recipes/share/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private idChange: Subscription;
  constructor(private shpLS:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shpLS.getShoppingList();
    this.idChange = this.shpLS.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
    });
  }
  
  ngOnDestroy(): void {
      this.idChange.unsubscribe();
  }
  
  onEditItem(index:number){
    this.shpLS.startedEditing.next(index);
  }
  

}
