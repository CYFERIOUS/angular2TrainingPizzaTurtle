import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as fromCentralReducer from '../../store/app.reducer';
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { Recipe } from "../recipe.model";

import * as recipeActions from "./recipe.actions";


@Injectable()
export class RecipeEffects {
    @Effect()
    fetchRecipes = this.actions$.pipe(ofType(recipeActions.FETCH_RECIPES),
    switchMap(()=>{
        return this.http.get<Recipe[]>(
            'https://ngtestferchonossa-default-rtdb.firebaseio.com/recipes.json'
          )
    }), map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),map(recipes=>{
        return new recipeActions.SetRecipes(recipes);
      })
    
    );

    

    @Effect({dispatch:false})
    saveRecipes = this.actions$.pipe(ofType(recipeActions.SAVE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState])=>{
     return this.http
      .put(
        'https://ngtestferchonossa-default-rtdb.firebaseio.com/recipes.json',
        recipesState.recipes
      )
    }));
    constructor(private actions$: Actions, private http:HttpClient, private store:Store<fromCentralReducer.AppState>){}
}