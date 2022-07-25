import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/recipes/share/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  ingredientForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editItemIndex:number;
  editedItem: Ingredient;
  constructor(private shpLS:ShoppingListService) { }



  ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      'ingredientData': new FormGroup({
        'name': new FormControl(null,[Validators.required]),
        'amount': new FormControl(null,[Validators.required]),
      })
    });
   this.subscription = this.shpLS.startedEditing.subscribe(
     (index:number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem =  this.shpLS.getIngredient(index);
        this.ingredientForm.setValue({
          'ingredientData':{
              'name': this.editedItem.name,
              'amount': this.editedItem.amount
          }
        })
     });
  }

  onSubmit(){
    
    //console.log(this.signupForm.get('ingredientData.name').value);
    //console.log(this.signupForm.get('ingredientData.amount').value);
    this.onCreateIngredient(this.ingredientForm.get('ingredientData.name').value,this.ingredientForm.get('ingredientData.amount').value)
  }

  onCreateIngredient(nameInput: string, amountInput: number){
      const newIngredient = new Ingredient(nameInput,amountInput);
      if(this.editMode){
        this.shpLS.updateIngredient(this.editItemIndex,newIngredient);
      }else{
        this.shpLS.onAddIngredient(newIngredient);
      }
      this.editMode = false;
      this.onClear();
  }

  onDelete(){
    this.shpLS.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  onClear(){
    this.ingredientForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
