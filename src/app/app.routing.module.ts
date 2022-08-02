import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuardService } from "./auth/authguard.service";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes:Routes = [
    {path:'', redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes', component:RecipesComponent,
        canActivate:[AuthGuardService],
        children:[
            {path:'',component: RecipesStartComponent},
            {path:'new',component: RecipesEditComponent},
            {path:':id',component: RecipeDetailComponent,resolve:[RecipesResolverService]},
            {path:':id/edit',component: RecipesEditComponent,resolve:[RecipesResolverService]},
        ]},
    
    {path:'shopping', 
      component:ShoppingListComponent,
    },
    {path: 'auth', component:AuthComponent}
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