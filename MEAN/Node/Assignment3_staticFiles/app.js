const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('./utils/path');
const userRoutes = require('./routes/user.routes');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'not-found.html'));
})

app.listen(3000);