import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpService } from '../../http.service';

import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  @Output() bookEdit = new EventEmitter<Book>();
  books: Book[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  editBook(book: Book, form: NgForm): void {
    console.log('got the update request for ', book);
    this._httpService.editBook(book)
      .subscribe(data => {console.log('updated book', data);
      this.book = null;
    });
  }
  hideEdit(): void {
    this.book = null;
  }
  deleteBook(_id: number): void {
    this.book = null;
    this._httpService.deleteBook(_id)
      .subscribe(data => {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i]._id === data._id) {
            this.books.splice(i, 1);
          }
        }
      });
  }
}



