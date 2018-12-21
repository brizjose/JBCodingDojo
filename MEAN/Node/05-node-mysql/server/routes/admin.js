const {admin_controller} = require('../controllers');
const router = require('express').Router();

module.exports = router
.get('/add-product', admin_controller.getAddProduct)
.get('/products', admin_controller.getProducts)
.post('/add-product', admin_controller.postAddProduct)
.get('/edit-product/:productId', admin_controller.getEditProduct)
.post('/edit-product', admin_controller.postEditProduct)
.post('/delete-product', admin_controller.postDeleteProduct)
