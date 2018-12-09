const express = require('express');

const router = express.Router();

router.get('/new', (req, res, next) => {
    console.log('In the new middleware!');
    res.send('<form action="/create" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
});

router.post('/create', (req, res, next) => {
    console.log('in the create middleware');
    const data = req.body;
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;