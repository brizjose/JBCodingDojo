const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./server/controllers/error');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./server/routes'));
app.use(errorController.get404);

app.listen(port, () => console.log(`Express listening on port ${port}`));

