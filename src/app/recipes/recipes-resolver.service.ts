import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { DataStorageService } from "./share/data-storage.service";

@Injectable({
    providedIn:'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dSs: DataStorageService, private rs: RecipeService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.rs.getRecipes();
        if(recipes.length === 0){
            return this.dSs.fetchRecipes();
        }else{
            return recipes;
        }
      
    }
}