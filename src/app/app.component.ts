import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('messageBox',{ static: true}) messageBox!: ElementRef;

  isOn = false;

  clicked() { this.isOn = !this.isOn;  }

  backGroundSwitcher(){

    this.isOn ? this.messageBox.nativeElement.style.backgroundColor = 'blue' : this.messageBox.nativeElement.style.backgroundColor = 'red';
    this.isOn ? this.messageBox.nativeElement.style.color  = 'white' : this.messageBox.nativeElement.style.color  = 'yellow';

  }


  get message() {
    this.backGroundSwitcher();

    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}
