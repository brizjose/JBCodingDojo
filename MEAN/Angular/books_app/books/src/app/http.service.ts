import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Book } from './models/book';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  books$ = new BehaviorSubject<Book[]>([]);

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    console.log('service knows, so making server call');
    this._http.get<Book[]>('/books')
      .subscribe(data => this.books$.next(data));
    return this.books$;
  }

  createBook(book: Book): Observable<Book> {
    console.log('http service got a request to create book', book);
    return this._http.post<Book>('/books', book);
  }

  editBook(book: Book): Observable<Book> {
    return this._http.put<Book>(`/books/${book._id}`, book);
  }

  deleteBook(_id: number): Observable<Book> {
    console.log('service got delte request for', _id);
    return this._http.delete<Book>(`./books/${_id}`);
  }

}
