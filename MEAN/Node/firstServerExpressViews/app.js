const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

// order matters with middleware; do more general routes last
// we can also set a common starting segment to paths to filter them even better, example, '/admin'
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catch all route 
// app methods can be chained, so we can pass a status along
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'not-found.html'));
})

app.listen(3000);