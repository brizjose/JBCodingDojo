const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

const errorController = require('./server/controllers/error');

// db configurations and models
const sequelize = require('./util/database');
const Product = require('./server/models/product');
const User = require('./server/models/user');
const Cart = require('./server/models/cart');
const CartItem = require('./server/models/cart-item');
const Order = require('./server/models/order');
const OrderItem = require('./server/models/order-item');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    User.findById(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err))
})
app.use(require('./server/routes'));
app.use(errorController.get404);

// create relationships between models

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});
Order.belongsTo(User);
User.hasMany(Order);
Product.belongsToMany(Order, {through: OrderItem});
Order.belongsToMany(Product, {through: OrderItem});

// syncs models to the database, only if no error, connect to port
// if database structure has changed and you need to drop tables and create them again, use:
// .sync({force: true})

sequelize
// .sync({force: true})
.sync()
.then(result => {
    return User.findByPk(1);
})
.then(user => {
    if (!user) {
        return User.create({name: 'JB', email: 'jb@email.com'});
    }
    return user;
})
.then(user => {
    return user.createCart();
})
.then(cart => {
    app.listen(port);
})
.catch(err => console.log(err))


