import { EventEmitter } from "@angular/core";
import { Ingredient } from "../recipes/share/ingredient.model";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Ajo',10),
        new Ingredient('Tomatoes',20)
      ];

      getShoppingList(){
        return this.ingredients.slice();
      }

      onAddIngredient(ingro:Ingredient){
          this.ingredients.push(new Ingredient(ingro.name,ingro.amount));
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      onAddIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

      }
}