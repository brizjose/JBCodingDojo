const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form></body></html>');
        return res.end();    
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My Node App</title></head><body><h1>Welcome to my Node.js Server!</h1></body></html>')
    res.end();
};

// export syntax:
// if only one module:

// module.exports = requestHandler;

// if different properties:

// module.exports.handler = requestHandler;
// module.exports.other = requestOther;

// another way to export different properties is by exporting key:value pairs:

module.exports = {
    handler: requestHandler,
};

