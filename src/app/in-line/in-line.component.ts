import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-line',
  templateUrl: './in-line.component.html',
  styles: [`
  div{
    background-color: red;
  }
  `]
})
export class InLineComponent implements OnInit {
  
  addNinja:boolean = false;
  ninjaActive:string = "no ninja on the road";
  ninjaWeapon:string = "pride";
  weapons = ["bo"];


  constructor() {
  }

  ngOnInit(): void {
  }

  onClickNinjaBtn(){
    this.addNinja = true;
    this.weapons.push(this.ninjaWeapon);
    this.ninjaActive = this.ninjaWeapon;
  }

  onUpdateNinjaWeapon(event:Event){
    this.ninjaWeapon =(<HTMLInputElement>event.target).value;
    console.log(this.ninjaWeapon);
  }




}
