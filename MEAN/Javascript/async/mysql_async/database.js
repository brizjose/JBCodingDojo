const mysql = require('mysql');



class Database {
    constructor (config) {
        this.connection = mysql.createConnection(config); 
    }
    query(query, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, args, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) return reject(err);
                resolve();
            });
        });
    }
}

module.exports = Database;