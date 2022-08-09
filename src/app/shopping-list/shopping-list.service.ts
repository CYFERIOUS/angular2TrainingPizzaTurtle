import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../share/ingredient.model";


@Injectable({
  providedIn : 'root'
})
export class ShoppingListService{
    startedEditing = new Subject<number>();
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Ajo',10),
        new Ingredient('Tomatoes',20)
      ];

      getShoppingList(){
        return this.ingredients.slice();
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }

      onAddIngredient(ingro:Ingredient){
          this.ingredients.push(new Ingredient(ingro.name,ingro.amount));
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      onAddIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}