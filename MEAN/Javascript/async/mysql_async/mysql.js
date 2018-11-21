const util = require('util');
const mysql = require('mysql');

// connect to db
const db = mysql.createPool ({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lme'
})

// connection handling middleware
db.getConnection ((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }   

    if (connection) connection.release()

    return

})

db.query = util.promisify(db.query);

module.exports = db
