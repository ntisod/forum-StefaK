// NOTE: require always returns the same instance of a module
// if it resolves to the same file

const mysql = require("mysql");
const config = require("../config");

let dbConnection;

async function connectToDb() {
    // Set up a database connection
    dbConnection = mysql.createConnection({
        host:       config.db.HOST,
        user:       config.db.USER,
        password:   config.db.PASSWORD,
        database:   config.db.NAME
    });

    // Connect to the database
    await new Promise((res, rej) => dbConnection.connect(err => {
        // Crash the server if there was an error
        if (err) {
            console.log(err);
            process.exit(-1);
        }

        res("Successfully connected to server!");
    }));
}

// The server will crash if there were any errors
module.exports.testDbConnection = async _ => {
    await connectToDb();

    // Close the db connection
    dbConnection.end();
}

module.exports.query = async (query, data) => {
    let rows, fields;
    
    await connectToDb();

    // Execute the query
    await new Promise((res, rej) => { 
        dbConnection.query(query, data, (err, _rows, _fields) => {
            if (err)
                return rej(err);
            // Let the function that executed the parent function handle these data
            rows = _rows;
            fields = _fields;
            return res("Query executed successfully");
        });
    }) 

    // Close the db connection
    dbConnection.end();

    return { rows, fields };
}