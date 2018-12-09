const http = require('http');
const routes = require('./routes');

// this creates the event listener that spins the server:

const server = http.createServer(routes.handler);

// server starts listening for requests:

server.listen(3000);

