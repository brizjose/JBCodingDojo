import { BrowserModule } from '@angular/platform-browser';
// we can have angular handle forms by importing the forms module from  "@angular/forms": "^6.1.0", which is found in the package.json file
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService} from './http.service';

import * as fromBooks from './books';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
