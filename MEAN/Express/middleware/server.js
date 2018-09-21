const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
// we import our middleware with require
const logger = require('./server/middleware/logger');

const app = express();

app
  .set('views', path.join(__dirname, 'views'))    
  .set('view engine', 'ejs');

// see what our middleware module is
// console.log("logger is",logger);

// where we create middleware matters
// we console.log(request.body) here and appears undefined.  If we do below bodyParser, see what happens
app
  .use((request,response,next) => {
    // console.log(request.body);
    next();
})

  .use(bodyParser.urlencoded({extended:true}))

// we'll build middleware in a module, inside server/middleware directory.  Modularizing the server is good practice!
//middleware created in a module:

.use(logger)

// creating middleware here
  .use((request,response,next) => {
    // console.log(next);
    // console.log(request.body);
    //needs the next() invocation in order to finish it's loop, otherwise we see the spinning wheel in the browser
    next();
});
// the above doesn't do anything, it is just an illustration of what middleware is.  It is a function with a request, a response and next.  with next being a function that indicates Node.js that middleware is done running this pice of middleware.
// because middleware calls can be asynchronous, middleware is designed so that we need to indicate we're done with next();
// if we don't call next, we'll wait inside the function until we time out.

// it is important to note that all middleware is going to process all request and responses so any 'app.use' we bring into the server will act

// STATE:  middleware makes decisions.  Example is the body-parser middleware .urlencoded({extended:true}).   State is created and preserved through functions:

function stateful(doStuff, ...options) {
  return function(request, response, next) {
    console.log('inside stateful middleware', doStuff, options);
    //check if express already has a method before including it, because we do not want to override it
    console.log(request.doStuff)

    if(doStuff) {
      request.doStuff = true;
    } else {
      // error handling done by returning next with an error message
      // we need to handle them, otherwise they are displayed to user. 
      // in order to handle errors, we write error-handling middleware.
      // error handling middleware usually done at the bottom... so see bottom of server....  
      return next(new Error('do stuff was false'));
    }

    next();
  };
}

app.use(stateful(false, false, 'whatever'));


const names = ['Jack','Jill','John','Jos']

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/names', (req,res) => {
    // console.log(req.body);
    names.push(req.body.name);
    res.render('names',{name:req.body.name, names});
    // res.redirect('/');
});

app.get('/names/:name_id', (req,res) => {
    // console.log(req);
    // console.log(req.params);
    // console.log(req.params.name_id);
    res.send(names[req.params.name_id]);
});

// ERROR HANDLING MIDDLEWARE
// ehm takes 4 arguments:

app.use(function(error, request, response, next) {
  console.log(error.message);
  next(error); 
})
app.use(function(error, request, response, next) {
  response.send(error.message);
  next(); 
})

app.listen(port, () => console.log(`Express server listening on port ${port}`));


