const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// order matters with middleware; do more general routes last
app.use(adminRoutes);
app.use(shopRoutes);

// catch all route 
// app methods can be chained, so we can pass a status along
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);