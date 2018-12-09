const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('hit the root route');
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
})

router.get('/users', (req, res, next) => {
    console.log('hit the users route');
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
})

module.exports = router;