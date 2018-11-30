import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appFadeout]'
})

export class FadoutDirective {

    @HostBinding('style.opacity') opacityLevel = 1;

    @HostListener('click') opacityFade(eventData: Event) {
        const fader = setInterval(() => {
            if (this.opacityLevel < 0.01) {
                clearInterval(fader);
            } else {
                this.opacityLevel = this.opacityLevel - 0.01;
            }
        }, 10);
    }

}


