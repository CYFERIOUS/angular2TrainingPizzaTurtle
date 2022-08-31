import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent 
implements OnInit, OnChanges, 
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,OnDestroy{

  @Input('pizzaServe') element:{type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild("motorhead", {static: true}) motorhead: ElementRef;
  @ContentChild("contentParagraph", {static:true}) paragraph: ElementRef;
  constructor() {
    console.log("constructor called");
   }
   ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
   }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("lemmy" + this.motorhead.nativeElement.textContent);
    console.log("contentChild paragraph" + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log("contentChild paragraph" + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("lemmy" + this.motorhead.nativeElement.textContent);

  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("onDestroy called");
  }

}
