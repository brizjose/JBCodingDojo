const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In the root middleware!');
    // __dirname gets us to the folder where we are, we join this with path to the file
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
