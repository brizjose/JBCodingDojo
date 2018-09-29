const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const {Schema} = mongoose;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/authors_books', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    isAlive: {
        type: Boolean,
        default: true,
    },
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        }
    ]
});

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    pages: {
        type: Number,
        required: true,
        min: 1,
    },
    year: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
});

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/authors', function(request, response) {
    Author.find({})
        .populate('books')
        .then(authors => response.render('authors/index', {authors}))
        .catch(console.log);
});

app.get('/authors/new', function(request, response) {
    response.render('authors/new');
});

app.post('/authors', function(request, response) {
    Author.create(request.body)
        .then(author => {
            console.log('created author', author);
            response.redirect('/authors');
        }) 
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key=>error.errors[key].messages)

            response.render('authors/new', {errors});
        })
});

app.get('/books', function(request, response) {
    Book.find({})
        .populate('author')
        .then(books => response.render('books/index', {books}))
        .catch(console.log);
});

app.get('/books/new', function(request, response) {
    Author.find({})
    .then(authors => response.render('books/new', {authors}))
    .catch(console.log);
});

app.post('/books', function(request, response) {
    Book.create(request.body)
        .then(book => {
            console.log('created book', book);
            return Author.findById(book.author)
                .then(author => {
                    author.books.push(book.id);
                    return author.save()
                })
                .then(() => response.redirect('/books'));
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key=>error.errors[key].messages)

            response.render('books/new', {errors});
        })
})


app.listen(port, () => console.log(`express listening on port ${port}`));