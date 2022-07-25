import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  recipes:Recipe[];
  subscription:Subscription;
  constructor(private rps:RecipeService, private router: Router, private acr:ActivatedRoute) { }

  ngOnInit(): void {
   this.subscription = this.rps.recipesChanged.subscribe(
      (recipes: Recipe[])=>{
        this.recipes = recipes;
      }
    )
    this.recipes = this.rps.getRecipes();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
