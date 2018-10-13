import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book = new Book();
  books: Book[] = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.books.push(this.book);

    // this line is necessary to break reference to the book being submitted.  now when form is reset (below), it resets an empty book
    this.book = new Book();

    console.log('books array', this.books);

    form.reset();
  }
}
