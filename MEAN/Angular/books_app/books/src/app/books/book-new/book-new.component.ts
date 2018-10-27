import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../../http.service';

import { Book } from '../../models/book';


@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  @Output() createBook = new EventEmitter<Book>();

  book = new Book();  // this is the book referenced in the html and to which [(ngForm)] is binding

  constructor(
    private _httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    console.log('printing book form', form.value);

    this._httpService.createBook(form.value)
      .subscribe(() => {
        this.createBook.emit(form.value);
        // this.books.push(data);  this line is being replaced with the emitter, so parent pushes to book list
        this.book = new Book();
        form.reset();
        this.router.navigateByUrl('/');

      }, error => {
        console.log(error);
    });
  }
}
