import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from './recipe.model';
import { Actions,ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromCentralReducer from '../store/app.reducer'
import * as RecipesActions from './store/recipe.actions';
import { map, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private store:Store<fromCentralReducer.AppState>,
   private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.store.select('recipes').pipe(
        take(1),
        map(recipesState=>{
        return recipesState.recipes;
       }),switchMap(recipes=>{
        if(recipes.length === 0){
          this.store.dispatch(new RecipesActions.Fetchecipes());
          return this.actions$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
        }else{
          return of(recipes);
        }
       })
       );
       
       
  }
}
