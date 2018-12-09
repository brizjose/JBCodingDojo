const express = require('express');

const app = express();

// we route requests to different middleware with the use of paths
// path is the first parameter taken by app.use()
// the second parameter is the middleware
// for more info about app.use, check the expressjs.com api
// file is read top to bottom and looks for path matches.
// so we reserve the '/' root route for the bottom...

// note we don't use next(); so that we don't send two responses by sending request to the next middleware

// but if we do use next();, we'll be able to channel requests through middleware that always runs:


app.use('/', (req, res, next) => {
    console.log('This always runs, has the root route, but let\'s request to continue because of next');
    next();
});

app.use('/new', (req, res, next) => {
    console.log('In the new middleware!');
    res.send('<h1>The Add New Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the root middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);