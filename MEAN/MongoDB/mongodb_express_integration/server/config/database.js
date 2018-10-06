//require mongoose
const mongoose = require('mongoose');
//require path to build the path to this directory
const path = require('path');
//require fs to read directory
const fs = require('fs');
//this regulatr expression will help us with fs when we look into the directory in search only for js files; the \\ escapes the . so it is read as a .; the 'i' means case insensitive
const reg = new RegExp('\\.js$', 'i');

//the following gives us an absolute path to the models directory:
const modelsPath = path.resolve('server', 'models');

//get rid of deprecation warning when using promises:
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/authors_books', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('MongoDB connected'));


//we'll read our directory, and we want this process to block until we're sure the information we need is available.  If we don't specify .readdirSync, the .readdir is asynchronous and would cause an error
//the forEach will give us each file that is found in this directory, but want to make sure that what we require is actually a .js file and only a .js file, so we use the RegExp we constructed above
fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    } 
});

