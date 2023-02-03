import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {


  constructor(private el: ElementRef) {
    el.nativeElement.style.background = 'red';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.cursor = 'pointer';
  }



}
