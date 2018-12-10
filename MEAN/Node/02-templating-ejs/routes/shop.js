const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // for handlebars to work, do all the logic here and let templating engine get only true or false statements to render
  res.render('shop', {
    prods: products, 
    pageTitle: 'Shop', 
    path: '/', 
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
