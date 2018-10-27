import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';

import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book = new Book();  // this is the book referenced in the html and to which [(ngForm)] is binding
  books: Book[] = [];
  selectedBook: Book;
  filter: Book = new Book();

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getBooks();
  }
  getBooks(): void {
    this._httpService.getBooks()
      .subscribe(books => {
        this.books = books;
        console.log('these books are back from subscription', books);
      });
  }

  getBook(book: Book): void {
    this.selectedBook = this.selectedBook === book ? null : book;
  }

  onCreate(book: Book): void {
    this.books.push(book);
    // another way of doing the above is with a reassignment, but it is more resource intensive
    // this.books = [...this.books, book];
  }

  clearFilter(): void {
    this.filter = new Book();
  }

  onEvent(event: Event): void {
    // this is a way to control the click event
    event.stopPropagation();
  }

  onDelete(_id: number): void {
    console.log('got request to delete book: ', _id);
    this._httpService.deleteBook(_id)
      .subscribe(data => {
        this.books = this.books.filter(book => book._id !== data._id);
      });
  }

}
