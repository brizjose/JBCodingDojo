const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash')
const port = process.env.PORT || 8000;
const app = express();

//build app
app
.set('view engine', 'ejs')
.set('views', path.resolve('views'))
.use(express.static(path.join(__dirname, 'static')))
.use(bodyParser.urlencoded({extended:true}))
.use(session({
    secret:'dojo',
    resave: false,
    saveUninitialized: false,
    cookie: {secure:false, maxAge: 60000}
}))
.use(flash())

require('./server/config/database');
require('./server/config/routes')(app);

//port connection
app.listen(port, () => console.log(`Express listening on port ${port}`));
