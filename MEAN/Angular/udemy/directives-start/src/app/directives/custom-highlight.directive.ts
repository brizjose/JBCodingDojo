import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {
  @Input() initialColor = 'transparent';
  @Input() highlightColor = 'cyan';
  @HostBinding('style.backgroundColor') backgroundAlter = this.initialColor;

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundAlter = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundAlter = this.initialColor;
  }

}
