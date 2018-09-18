const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));    
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

const names = ['Jack','Jill','John','Jos']

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/names', (req,res) => {
    console.log(req.body);
    names.push(req.body.name);
    res.redirect('/');
});

app.get('/names/:name_id', (req,res) => {
    console.log(req);
    console.log(req.params);
    console.log(req.params.name_id);
    res.send(names[req.params.name_id]);
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));


