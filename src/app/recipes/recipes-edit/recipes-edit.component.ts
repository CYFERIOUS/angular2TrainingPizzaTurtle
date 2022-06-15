import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss']
})
export class RecipesEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  constructor(private acRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe((params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
    })
  }

}
