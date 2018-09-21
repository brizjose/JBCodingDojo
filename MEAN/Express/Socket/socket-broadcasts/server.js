const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

//this is for html files, js, css, images
app.use(express.static(path.join(__dirname, 'static')));
//this sets up templating with ejs; all templates in views dir
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//body parser middleware
app.use(bodyParser.urlencoded({ extended:true } ));

//root route
app.get('/', (request, response) => {
    response.render('index');
})

//server = port listen
const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
//initiate socket
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('user connection detected');

    socket.on('alpha', function (data) { 
        // socket.emit will respond back to the socket client that triggered this 'alpha' listener
        socket.emit('updateClient', { data: 5 });
    });
    socket.on('beta', function (data) { 
        // io.emit will message all socket clients 
        io.emit('updateAllClients', { data: 5 });
    });
    socket.on('gamma', function (data) { 
        // socket.broadcast will message all socket clients except the one that triggered the 'gamma' listener
        socket.broadcast.emit('updateAllExceptOne', { data: 5 });
    });
});