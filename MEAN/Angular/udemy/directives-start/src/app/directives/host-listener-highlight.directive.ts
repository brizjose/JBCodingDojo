import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListenerHighlight]'
})
export class HostListenerHighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  // as a parameter we pass the event we are listening for, one of the events supported by the DOM; *can also be custom events
  // we bind HostListener to a method we want to execute
  // mouseenter is the methods we want to execute
  // that takes the event which we have referenced in the HostListener paramater.  This event can be captured by a custom event as $event
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#CDCED0');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
