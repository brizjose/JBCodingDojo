const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('in the users route');
    res.send('<p>You got to the users route</p>');
});

app.use('/', (req, res, next) => {
    console.log('in the root route');
    res.send('<p>You got to the root route</p>');
});

app.listen(3000);
