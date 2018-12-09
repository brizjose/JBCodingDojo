// we can remove this http import because express does this for us
// const http = require('http');

// npm install express and import it here
const express = require('express');

// initialize app with express function
const app = express();

// middleware: every request that comes to the server passes through middleware functions
// middleware can be third party or custom functions that handle requests as they build responses
// invoke middleware by passing 'use' as an app method
// middleware takes 3 arguments: req, res, next
// next is a function that allows the request to travel to the next middleware once the current is completed

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();  // allows the request to continue to the next middleware
});
app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

// pass app through createServer -- this takes the place of routes when using vanilla node
// express does http.createServer(app) and sever.listen in one line, so no need for:

// const server = http.createServer(app);
// server.listen(3000);

// instead, just

app.listen(3000);