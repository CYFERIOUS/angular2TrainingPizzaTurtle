import { EventEmitter, Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Ingredient } from "./share/ingredient.model";

@Injectable()
export class RecipeService {

    constructor(private shLS:ShoppingListService){

    }

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('kawabonga',
        'recipe test turtle','https://i.ebayimg.com/images/g/v2kAAOSwuyNdM2IJ/s-l1600.jpg',
        [
            new Ingredient('meat', 2),
            new Ingredient('lettuce',5)
        ]),
        new Recipe('yugaloogaloo',
        'recipe test lobo',
        'https://i.ebayimg.com/images/g/v2kAAOSwuyNdM2IJ/s-l1600.jpg',
        [
            new Ingredient('bones', 2),
            new Ingredient('onion',5)
        ]),
    
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    addIToShoppingList(ingredients:Ingredient[]){
            this.shLS.onAddIngredients(ingredients);
    }
}