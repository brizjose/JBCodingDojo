const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (request, response) => {
    response.render('index.html');
})

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
const io = require('socket.io')(server);

//because variable count is outside of the io.on, it is a global variable shared with all connections
let count = 0;
io.on('connection', socket => {
    console.log(`incoming socket connection`);

    socket.on('buttonClicked', () => {
        numberUpdated(++count);
    });

    socket.on('resetClicked', () => {
        numberUpdated(count = 0);
    });

    // this one emits the current count to any new user that connects after counter has started    
    socket.emit('numberUpdated', count);
});

function numberUpdated(number) {
    io.emit('numberUpdated', number);
};






