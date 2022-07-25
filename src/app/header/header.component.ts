import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../recipes/share/data-storage.service";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class headerComponent{
    collapsed = true;
   @Output() currentFeature = new EventEmitter<string>();
    
   constructor(private recipeStorage:DataStorageService){}
    onActiveSection(feature:string){
        this.currentFeature.emit(feature);
    }
    onSaveData(){
        this.recipeStorage.storeRecipes().subscribe(response=>{
            console.log(response);
        });
    }

    onFetchData(){
        this.recipeStorage.fetchRecipes().subscribe();
    }

}