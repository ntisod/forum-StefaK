// NOTE: require always returns the same instance of a module
// if it resolves to the same file

const mysql = require("mysql");
const config = require("../config");

let dbConnection;

function connectToDb(callback) {
    // Set up a database connection
    dbConnection = mysql.createConnection({
        host:       config.db.HOST,
        user:       config.db.USER,
        password:   config.db.PASSWORD,
        database:   config.db.NAME
    });

    dbConnection.connect(err => {
        if (err) {
            throw new Error(err);  
        }

        console.log("Successfully connected to the database!");
        callback();
    });
}

module.exports.connectToDb = connectToDb;
module.exports.dbConn = dbConnection;