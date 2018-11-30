import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() section = new EventEmitter<string>();

    onSelect(selection: string): void {
        this.section.emit(selection);
    }
}
