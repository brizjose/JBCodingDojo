import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { map, switchMap } from 'rxjs/operators';

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

  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    // this is wrong because we are nesting observables:

    // this.route.paramMap.subscribe(params => {
    //   const book_id = params.get('_id');
    //   this._httpService.getBook(book_id)
    //     .subscribe(data => this.book = data);
    // });

    // this solves the observable nesting problem using pipe:

    // this.route.paramMap.pipe(
    //   // we are getting the book id from the route
    //   map(params => params.get('_id')),
    //   // receive content from map, switch focus from map observable to another observable, the book coming back from service
    //   switchMap(_id => this._httpService.getBook(_id))
    //   )
    //   .subscribe(data => this.book = data);

    // this is how we implement resolve and avoid undefined errors when loading:

      this.book = this.route.snapshot.data.book as Book;
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



