const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// register the bodyParser middleware through which requests pass.  Before calling next, this parses the request's body sent through forms
// with this middleware we're able to get key:value pairs with req.body
app.use(bodyParser.urlencoded({extended: false}));

// we route requests to different middleware with the use of paths
// path is the first parameter taken by app.use()
// the second parameter is the middleware
// for more info about app.use, check the expressjs.com api
// file is read top to bottom and looks for path matches.
// so we reserve the '/' root route for the bottom...

// note we don't use next(); so that we don't send two responses by sending request to the next middleware

// but if we do use next();, we'll be able to channel requests through middleware that always runs:

app.get('/new', (req, res, next) => {
    console.log('In the new middleware!');
    res.send('<form action="/create" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
});

// by substituting app.get for app.post, this route will only listen for post requests
// do this when you want to filter request types because app.use accepts all kinds of request methods
// see how above the app.get has been used
// available filters are .get, .post, .delete, .put, .patch
app.post('/create', (req, res, next) => {
    console.log('in the create middleware');
    const data = req.body;
    console.log(req.body);
    res.redirect('/');
});

// use is a general route that will not do full matching.  If we change this to app.get, it will do exact matching of the url, and this improves router behavior
app.use('/', (req, res, next) => {
    console.log('In the root middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);