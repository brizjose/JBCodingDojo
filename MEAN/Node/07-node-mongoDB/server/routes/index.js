const admin_router = require('./admin');
const shop_router = require('./shop');

const router = require('express').Router();

module.exports = router
.use('/admin', admin_router)
.use(shop_router)