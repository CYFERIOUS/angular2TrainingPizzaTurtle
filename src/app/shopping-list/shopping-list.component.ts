import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

import { LoggingService } from '../logging.service';
import * as fromCentralReducer from '../store/app.reducer'
import * as ShoppingListActions from './store/shopping-list.actions';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(
   //private loggingService: LoggingService,
    private store: Store<fromCentralReducer.AppState>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    /*this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );*/

   // this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
    //this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
