import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes:Routes = [
    {path:'', redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes', component:RecipesComponent},
    
    {path:'shopping', 
      component:ShoppingListComponent,
    },
    //{path:'not-found', component: PageNotFoundComponent},
    //{path:'not-found', component: ErrorPageComponent, data:{message:'page not found from static'}},
    //{path:'**', redirectTo:'/not-found'}
  
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes,{useHash:true})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {
    
    
}