import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService:RecipeService){}
    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ngtestferchonossa-default-rtdb.firebaseio.com/recipes.json',recipes);
    }

    fetchRecipes(){
       return  this.http.get<Recipe[]>('https://ngtestferchonossa-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(data=>{
            return data.map(rezipe=>{
                return {...rezipe,ingredients:rezipe.ingredients? rezipe.ingredients : []}
            });
        }),tap(recepes=>{
            this.recipeService.setRecipes(recepes);
        }))
    }
}