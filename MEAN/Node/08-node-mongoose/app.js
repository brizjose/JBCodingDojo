const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;

const errorController = require('./server/controllers/error');

const User = require('./server/models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    User.findById('5c27f5ee3a7cdf506cadf321')
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err))
})
app.use(require('./server/routes'));
app.use(errorController.get404);

mongoose.connect('mongodb+srv://brizjose:root99root@cluster0-xzrul.mongodb.net/shop?retryWrites=true', { useNewUrlParser: true })
.then(result => {
    User.findOne()
    .then(user => {
        if (!user) {
            const user = new User({name: 'JB Gigi', email: 'jbg@email.com', cart: {items: []}});
            user.save();
        }
    })
    app.listen(port);
    console.log('listening on port', port);
})
.catch(err => console.log(err));

