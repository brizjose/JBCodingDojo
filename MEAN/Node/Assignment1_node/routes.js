const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url, method);
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Users</title></head><body><h1>Welcome to Users</h1><form action="/create-user" method="POST"><input class="text" name="user"><button type="submit">Submit</button></form></body></html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Dummy Users</title></head><body><h1>The Dummy Users</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>');
        return res.end();
    }
    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
}

module.exports = requestHandler;