import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomHighlightWithInitAlternative]'
})
export class CustomHighlightWithInitAlternativeDirective {
  @Input() initialColor = 'cyan';
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundAlter = this.initialColor;

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundAlter = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundAlter = this.initialColor;
  }

}
