const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// we set pug to be the view engine in this project
app.set('view engine', 'pug');

// not necessary to do this because 'views' is already the name of our templating folder.  we'd change the second parameter to the name used if not 'views'
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404'});
});

app.listen(3000);
