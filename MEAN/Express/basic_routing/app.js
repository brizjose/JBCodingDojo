const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Again!'));

//requests for static files are served with the use of express.static built-in middleware function in Express.  
//the function signature es 'express.static(root,[options])'
app.use(express.static('static'));

//to create virtual path prefixes:
app.use('/static', express.static('static'));

//if the directory where static files are is relative to the directory from where the node server is launched, safer to use the absolute path:
app.use('static', express.static(__dirname, 'static'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

