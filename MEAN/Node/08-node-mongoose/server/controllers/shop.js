const Product = require('../models/product');
const Order = require('../models/order');

module.exports = {

  getProducts(req, res, next) {
    Product.find()
    // .select('title price -_id')  // we can be selective about data we retrieve from db with .select and passing fields as args, excluding explicitly with the minus sign when we also want to do that
    // .populate('userId')  // we would use this to populate the entire object info of the embedded object
    // .populate('userId', 'name')  // we can be selective about what data we retrieve with populate, example, only the name
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
    },

  getProduct(req, res, next) {
    const prodId = req.params.productId;
    Product.findById(prodId)
    .then((product) => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
  },
  
  getIndex(req, res, next) {
    Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
  },
  
  getCart(req, res, next) {
    req.user
    .populate('cart.items.productId')  // populate takes the path within the User schema of what we want to populate
    .execPopulate()  // we do this in order to get a promise from .populate()
    .then(user => {
      const products = user.cart.items;
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: products
        });
    })
    .catch(err => console.log(err))
  },
  
  postCart(req, res, next) {
    const prodId = req.body.productId;
    Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    }).then(result => {
      console.log(result);
      res.redirect('/cart');
    }).catch(err => {
      console.log(err);
    })
  },
  
  postCartDeleteProduct(req, res, next) {
    const prodId = req.body.productId;
    req.user.deleteItemFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
  },

  postOrder(req, res, next) {
    req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return {quantity: i.quantity, product: {...i.productId._doc}} // with the spread operator and ._doc mongoose syntax, we are able to pull all and only the product details into the product field of the cart
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
  },
  
  getOrders(req, res, next) {
    Order.find({'user.userId': req.user._id})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
  },
  
}

