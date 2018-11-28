import { Component } from '@angular/core';

@Component({
    selector: 'app-success',
    template: `
        <h6>Success!</h6>
        <p>Content</p>
    `,
    styles: [`
        * {
            color: green;
        }
    `]
})

export class SuccessComponent {}
