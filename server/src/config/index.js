const   dotenv  = require("dotenv"),
        PATH    = require("path");

// Set NODE_ENV to development by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Check for the existence of the .env file and load the variables therein
// NOTE: only for development, during production deployement manager tools
// will be used to specify the environment
const envFound = dotenv.config();
if (!envFound) {
    throw new Error("ERROR: Couldn't find .env file");
}

// Destructure some variables from the process.env object
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME,
        PORT } = process.env;

module.exports = {
    port: parseInt(PORT, 10),
    dbPath: `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    clientDir: PATH.join(__dirname, "../../public"),
    origin: `http://${process.env.HOST}:${process.env.PORT}`,
    db: require("./db.config")
}