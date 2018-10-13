import { BrowserModule } from '@angular/platform-browser';
// we can have angular handle forms by importing the forms module from  "@angular/forms": "^6.1.0", which is found in the package.json file
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
