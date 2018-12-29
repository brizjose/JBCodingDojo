const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

const mongoConnect = require('./util/database').mongoConnect;

const errorController = require('./server/controllers/error');

const User = require('./server/models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    User.findById('5c279ee4c3ec831f4c90e4b5')
    .then(user => {
        req.user = new User(user.name, user.email, user.cart, user._id);
        next();
    })
    .catch(err => console.log(err))
})
app.use(require('./server/routes'));
app.use(errorController.get404);

mongoConnect(() => {
    app.listen(port);
});


