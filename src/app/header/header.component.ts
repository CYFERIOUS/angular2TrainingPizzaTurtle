import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../share/data-storage.service";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class headerComponent implements OnInit, OnDestroy{
   
    isAuthenticated = false;
    private userSub: Subscription;
   
    
   constructor(private recipeStorage:DataStorageService, private aus:AuthService){
   }
   ngOnInit(): void {
      this.userSub = this.aus.user.subscribe(user=>{
            this.isAuthenticated = !!user;
            //alert(this.isAuthenticated); if user exist or not exist - shakespeare.
      });
      
   }

   onLogOut(){
    this.aus.logout();
   }
 
    onSaveData(){
        this.recipeStorage.storeRecipes().subscribe(response=>{
            console.log(response);
        });
    }

    onFetchData(){
        this.recipeStorage.fetchRecipes().subscribe();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

}