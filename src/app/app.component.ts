import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isActive:string = 'recipes';

  onNavigated(feature:string){
    this.isActive = feature;
  }
}
