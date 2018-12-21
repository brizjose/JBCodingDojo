const mysql = require('mysql2');

// we need to open and close the connections per query
// that is not efficient, so a better way is to make a connection pool
// to createPool pass an object with configurations

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'root'
});

// we export the pool as a promise

module.exports = pool.promise();