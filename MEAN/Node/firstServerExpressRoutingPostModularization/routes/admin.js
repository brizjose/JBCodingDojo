const express = require('express');

const router = express.Router();

// admin/new => GET
router.get('/new', (req, res, next) => {
    console.log('In the new middleware!');
    res.send('<form action="/admin/new" method="POST"><input type="text" name="product"><button type="submit">Submit</button></form>');
});

// admin/new => POST
router.post('/new', (req, res, next) => {
    console.log('in the create middleware');
    const data = req.body;
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;