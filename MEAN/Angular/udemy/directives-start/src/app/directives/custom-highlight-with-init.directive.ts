import { Directive, HostBinding, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomHighlightWithInit]'
})
export class CustomHighlightWithInitDirective implements OnInit {
  @Input() initialColor: string;
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundAlter = this.initialColor;

  ngOnInit(): void {
    this.backgroundAlter = this.initialColor;
        // or
    // delete ngOnInit so that starts out with the initialColor = 'cyan'
    // if you want to have a pre-mousenter color different to the mouseleave color

  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundAlter = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundAlter = this.initialColor;
  }

}
