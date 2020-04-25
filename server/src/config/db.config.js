const config = require("../config");

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    pool: {
        // Max number of connections in the pool
        max: 5,
        // Min number of connections in the pool
        min: 0,
        // Max time (in ms) that the pool will try to get connection before throwing error
        acquire: 30000,
        // Max time (in ms) that a connection can idle before being released
        idle: 10000
    }
}