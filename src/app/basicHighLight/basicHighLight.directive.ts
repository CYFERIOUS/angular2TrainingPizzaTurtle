import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[basicHighLight]'
})
export class BasicHighlight implements OnInit {

    constructor(private elementRef: ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}