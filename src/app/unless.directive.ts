import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {


  @Input() set appUnless(condition:boolean){
    if(condition){
        this.vCref.createEmbeddedView(this.templateRef);
    }else{
      this.vCref.clear();
    }

  }
  constructor(private templateRef:TemplateRef<any>,private vCref:ViewContainerRef ) { }

}
