import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss']
})
export class RecipesEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  recipeForm: FormGroup;

  constructor( private acRoute:ActivatedRoute, private router:Router ,private rcpSrv: RecipeService) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe((params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log(this.editMode);
    })
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  initForm(){
    
    let recipeName ='';
    let recipeIMGpath = '';
    let recipeDescription='';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.rcpSrv.getRecipe(this.id);
      recipeName = recipe.name;
      recipeIMGpath = recipe.imgSrc;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
             'name': new FormControl(ingredient.name),
             'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imgSrc': new FormControl(recipeIMGpath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients
    });
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onSubmit(){
    /*const newRecipe = new Recipe(this.recipeForm.value['name'],
                                 this.recipeForm.value['description'],
                                 this.recipeForm.value['imgPath'],
                                 this.recipeForm.value['ingredients']);*/
    if(this.editMode){
      this.rcpSrv.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.rcpSrv.addRecipe(this.recipeForm.value);
    }
    console.log(this.recipeForm);
    //this.router.navigate(['new'], {relativeTo:this.acRoute});
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.acRoute});
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  

}
