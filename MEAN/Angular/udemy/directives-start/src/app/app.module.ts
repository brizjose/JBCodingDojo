import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { HostListenerHighlightDirective } from './directives/host-listener-highlight.directive';
import { HostBindingHighlightDirective } from './directives/host-binding-highlight.directive';
import { CustomHighlightDirective } from './directives/custom-highlight.directive';
import { CustomHighlightWithInitDirective } from './directives/custom-highlight-with-init.directive';
import { CustomHighlightWithInitAlternativeDirective } from './directives/custom-highlight-with-init-alternative.directive';
import { FadoutDirective } from './directives/fadout.directive';
import { UnlessStructuralDirective } from './unless-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HostListenerHighlightDirective,
    HostBindingHighlightDirective,
    CustomHighlightDirective,
    CustomHighlightWithInitDirective,
    CustomHighlightWithInitAlternativeDirective,
    FadoutDirective,
    UnlessStructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
