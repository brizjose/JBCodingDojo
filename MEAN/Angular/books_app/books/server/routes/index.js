const book_router = require('./book.routes');
const router = require('express').Router();

module.exports = router
  .use('/books', book_router);

  
  
  // this book_router is creating the resource portion of the route

  //    /resource/books

  // book.routes.js creates the last bit of the route

  //    /resource/books/:book_id     (when necessary)

  //  if there were more routes, could create
  //  author.routes.js, for example


  