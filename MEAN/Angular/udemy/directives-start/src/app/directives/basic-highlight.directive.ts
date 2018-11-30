import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {}

// although this directive works, not a good practice to access DOM elements like this.   See better-directive example for a good practice

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
