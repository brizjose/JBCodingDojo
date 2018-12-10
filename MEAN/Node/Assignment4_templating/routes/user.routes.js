const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    console.log('hit the root route');
    res.render('index', {pageTitle: 'User Form'});
})

router.post('/new', (req, res, next) => {
    users.push(req.body);
    res.redirect('/users');
})

router.get('/users', (req, res, next) => {
    console.log('hit the users route');
    res.render('users', {pageTitle: 'Users', users: users});
})

module.exports = router;