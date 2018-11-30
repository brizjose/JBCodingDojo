import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    // with HostBinding we dynamically attach the directive to the element that carries this directive's tag
    @HostBinding('class.open') isOpen = false;

    // with HostListener we listen for a click event, then we name our function toggleOpen
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
