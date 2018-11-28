import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    template: `
        <h6>Warning!</h6>
        <p>Content</p>
    `,
    styles: [`
        * {
            color: red;
        }
    `]
})

export class WarningComponent {}
