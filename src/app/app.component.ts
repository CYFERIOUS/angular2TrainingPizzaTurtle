
import { Component} from '@angular/core';

import { slideInAnimation } from './animationPage.app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    slideInAnimation
  ]
})
export class AppComponent {
  state = 'normal';
  wildEst = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }
    onDelete(item) {
      this.list.splice(item,1);
    }
    onAnimate(){
    
      this.state == 'normal' ? this.state = 'highLighted' : this.state ='normal';
      this.wildEst == 'normal' ?this.wildEst = 'highLighted' : this.wildEst ='normal';
    }

    animationStarted(event){
      console.log(event)
    }
    animationEnded(event){
      console.log(event)
    }

    onShrink(){
      this.wildEst = 'shrunken';
    }
}
