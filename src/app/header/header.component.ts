import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class headerComponent{
    collapsed = true;
   @Output() currentFeature = new EventEmitter<string>();

    onActiveSection(feature:string){
        this.currentFeature.emit(feature);
    }

}