import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindingHighlight]'
})
export class HostBindingHighlightDirective {

  // as a parameter we pass the property we want to access.
  // since it is a style property, we use it and then do camelCase for the DOM style we want to modify
  // the backgroundAlter name is something we come up with
  // then we provide an initial value with =
  @HostBinding('style.backgroundColor') backgroundAlter = 'transparent';

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundAlter = 'purple';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundAlter = 'transparent';
  }
}
