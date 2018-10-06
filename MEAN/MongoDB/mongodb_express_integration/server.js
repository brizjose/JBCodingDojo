const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

require('./server/config/database');
app.use(require('./server/config/routes'));

app.listen(port, () => console.log(`express listening on port ${port}`));

