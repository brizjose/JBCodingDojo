import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromBooks from './books';
import { BookResolve } from './resolvers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent,
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent,
      },
      {
        path: ':_id',
        component: fromBooks.BookDetailComponent,
        resolve: {
          book: BookResolve,
        }
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
