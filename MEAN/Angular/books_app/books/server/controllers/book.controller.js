const Book = require('mongoose').model('Book');

module.exports = {
    // get all of resource
    index(request, response) { 
        Book.find({})
          .then(books => response.json(books))
          .catch(console.log);
    },
    // get a single resource
    show(request, response) { 
        Book.findById(request.params.book_id)
          .then(book => {response.json(book)})
          .catch(console.log);
    },
    // create a resource
    create(request, response) { 
        Book.create(request.body)
          .then(book => response.json(book))
          .catch(error => {
              const errors = Object.keys(error.errors.map(key => error.errors[key].message))
              response.status(402).json(errors);
          });
    },
    // update a resource
    update(request, response) { 
        // the {new:true} optional param asks to give us back the new book; if not included, we get back the old book
        Book.findByIdAndUpdate(request.params.book_id, request.body, {new: true})
          .then(book => response.json(book))
          .catch(console.log)
    },
    // delete a resrouce
    delete(request, response) { 
        Book.findByIdAndRemove(request.params.book_id)
          .then(book => response.json(book))
          .catch(console.log)
    },
}

