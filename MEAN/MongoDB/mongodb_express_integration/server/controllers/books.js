const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');

module.exports = {
    index(request, response) {
        Book.find({})
            .populate('author')
            .then(books => {
                console.log({books});
                response.render('books/index', {books});
            })
            .catch(console.log);
    },
    show(request, response) {

    },
    edit(request, response) {
        Book.find({})
            .then(books => {
                console.log({books});
                response.render('books/new', {books});
            }) 
            .catch(console.log);
    },
    new(request, response) {

    },
    update(request, response) {

    },
    create(request, response) {
        Book.create(request.body)
        .then(book => {
            console.log('created book', book);

            return Author.findById(book.author)
                .then(author => {
                    author.books.push(book.id);

                    return author.save()
                });
        })
        .then(() => response.redirect('/books'))
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key=>error.errors[key].messages);
            response.render('books/new', {errors});
        });
    },
    destroy(request, response) {
        Book.findByIdAndRemove(request.params.book_id)
          .then()
          .catch()
    },
}; 