const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app
.use(body_parser.urlencoded({extended: true}))
.use(body_parser.json())
// angular replaces static
// to find out where angular will build components, go to
// angular.json and look for  "outputPath":
// change whatever name it has now to 'dist/public'
// .use(express.static(path.resolve('dist/public')))
.use(express.static(path.join(__dirname, 'dist/public')))

// angular built package.json
// go there to add the entry point to our application if not yet there  
// add or look for:
// "main": "server.js",
// with that done, you can launch it with nodemon

// package.json also contains the command line dict under "scripts"
// helpful if you don't remember, example, ng build

// ng build will create the "dist" file with the output of the project, "public"

// run ng build --watch
// to build "public" and watch for changes so it updates automatically

// ngbuild content is not permanent so don't do permanent mods here.
// do modifications on the "src"


app.use(require('./server/config/routes'));

app
.listen(port, () => console.log(`Express server listening on port ${port}`));


