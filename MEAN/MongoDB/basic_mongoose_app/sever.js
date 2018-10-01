//require all needed functionality and initialize the app
const express = require('express');
const path = require('path');
const color = require('colors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 8000;
const app = express();

//build the app
app
  .use(express.static(path.join(__dirname, 'static'))) 
  .use(bodyParser.urlencoded({extended:true}))
  .use(session({
    secret: 'yayuser',
    resave: false,
    saveUninitialized: flase,
    cookie: {secure:true}
  }))
  .use(flash())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req,res) => {
    User.find({})
      .then((db_users) => {
        users = db_users;
      
        console.log(color.yellow(db_users));
        res.render('index',{users});
      })
      .catch((error) => {
        const errors = Object.keys(error.errors)
        .map(key=>error.errors[key].message);
      
        console.log(color.red(errors));
        res.render('some_page', {errors})
      })
  })
  .post('/users',(req,res) => {
    console.log(color.white(req.body))
    let user = new User(req.body);
    user.save()
      .then((saved) => {
        console.log(color.yellow(saved));
        res.redirect('/');
      })
      .catch((error) => {
        // const errors = Object.keys(error.errors)
        //   .map(key => error.errors[key].message);
        // console.log(color.red(errors));
        
        for (let key in error.errors) {
          req.flash('registration', error.errors[key].message);
        }
        res.redirect('/');
      })
  })
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });

//connect to mongodb and a database in particular
mongoose.connect('mongodb://localhost:27017/basic_mongoose', { useNewUrlParser:true });
mongoose.connection.on('connected', ()=>console.log('Mongoose connected'));

//extract Schema object constructor from the mongoose object
const {Schema} = mongoose;
//create a new instance of Schema and provide it with structure, note it takes a JSON object as parameter
const userSchema = new Schema({
  first_name: {type: String, required: true, minlength: 1},
  last_name: {type: String, required: true, minlength: 1},
  email: {type: String, required: true, minlength: 1},
  age: {type: Number, required: true, min: 0}
});
//set this schema in our Models as 'User'
mongoose.model('User', userSchema);
//retrieve the 'User' schema from our Models
const User = mongoose.model('User');
//if working in same document, can simplify above two lines with:
//const User = mongoose.model('User', userSchema);





