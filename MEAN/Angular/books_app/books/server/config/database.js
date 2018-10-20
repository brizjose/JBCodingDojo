const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const reg = new RegExp('\\.js$', 'i');

// path method returns a string array
// use this if the process launches from root dir
// const models_path = path.resolve('server/models')
// use this in almost any situation
const models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser:true});

mongoose.connection.on('connected', () => console.log("MongoDB connected to Books App"));

// read models directory in synchronous way, so it blocks until we have the information.  one of the few instances we do synchronous codes in js
// because the files generated with these models are necessary for other pieces of the application and will throw errors
// because path returns a string array, we do forEach to read each file in the url
fs.readdirSync(models_path).forEach(file => {
    if (reg.test(file)) {
        require(path.join(models_path, file));
    }
});