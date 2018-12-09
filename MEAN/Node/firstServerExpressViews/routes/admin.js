const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

// admin/new => GET
router.get('/new', (req, res, next) => {
    console.log('In the new middleware!');
    res.sendFile(path.join(rootDir, 'views', 'new-product.html'));
});

// admin/new => POST
router.post('/new', (req, res, next) => {
    console.log('in the create middleware');
    const data = req.body;
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;