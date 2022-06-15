import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor(private rcpS:RecipeService) { }

  ngOnInit(): void {
  }

  addIToList(){
    this.rcpS.addIToShoppingList(this.recipe.ingredients);
  }

}
