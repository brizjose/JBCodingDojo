import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessStructural]'
})
export class UnlessStructuralDirective {

  // set converts the property into a method that observe for changes whenever the property changes.
  // it changes whenever a parameter of this condition changes, so it needs to receive a value.  in this case, condition.
  @Input() set appUnlessStructural(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // needs us to inject the tempate (what to display --what is refered to as ng-template when explicitly written in the html)
  // and the view (where to render --Angular marks this place)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
