const {shop_controller} = require('../controllers');
const router = require('express').Router();

module.exports = router
.get('/', shop_controller.getIndex)
.get('/products', shop_controller.getProducts)
.get('/products/:productId', shop_controller.getProduct)
.get('/cart', shop_controller.getCart)
.post('/cart', shop_controller.postCart)
.post('/cart-delete-item', shop_controller.postCartDeleteProduct)
.get('/orders', shop_controller.getOrders)
.get('/checkout', shop_controller.getCheckout)

