import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Ingredient } from "./share/ingredient.model";

@Injectable()
export class RecipeService {

    constructor(private shLS:ShoppingListService){}
    
    recipesChanged = new Subject<Recipe[]>();


    /*private recipes: Recipe[] = [
        new Recipe('kawabonga',
        'recipe test turtle','https://i.ebayimg.com/images/g/v2kAAOSwuyNdM2IJ/s-l1600.jpg',
        [
            new Ingredient('meat', 2),
            new Ingredient('lettuce',5)
        ]),
        new Recipe('bebop',
        'recipe test bebop',
        '../../../assets/bebopPizza.jpg',
        [
            new Ingredient('bones', 2),
            new Ingredient('onion',5)
        ]),
    
      ];*/

    private recipes:Recipe[]=[];
    
    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes.slice()[index];
    }
    addIToShoppingList(ingredients:Ingredient[]){
            this.shLS.onAddIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}