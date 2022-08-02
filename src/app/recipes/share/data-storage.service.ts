import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService:RecipeService, private aus:AuthService){}
    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ngtestferchonossa-default-rtdb.firebaseio.com/recipes.json',recipes);
    }

    fetchRecipes(){
     
        return  this.http.get<Recipe[]>('https://ngtestferchonossa-default-rtdb.firebaseio.com/recipes.json'
        ).pipe(map(data=>{
            return data.map(rezipe=>{
                return {...rezipe,ingredients:rezipe.ingredients? rezipe.ingredients : []}
            })
        }),tap(recepes=>{
            this.recipeService.setRecipes(recepes);
        }));
        
    }
}