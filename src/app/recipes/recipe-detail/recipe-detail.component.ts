import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id:number;
  constructor(private rcpS:RecipeService, private acRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.recipe = this.rcpS.getRecipe(this.id);
    })
  }

  addIToList(){
    this.rcpS.addIToShoppingList(this.recipe.ingredients);
  }

  editMode(){
    
    //this.router.navigate(['edit'],{relativeTo:this.acRoute});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.acRoute});
  }
  onDeleteRecipe(){
    this.rcpS.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
