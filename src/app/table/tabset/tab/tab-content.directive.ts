import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTabContent]'
})
export class TabContentDirective {

  constructor(private templateRef: TemplateRef<any>, public viewContainerRef: ViewContainerRef) { }

}
