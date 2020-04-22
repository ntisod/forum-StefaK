const   bodyParser      = require("body-parser"),
        express         = require("express");

const   config          = require("../config"),
        api             = require("../api"),
        initApi         = require("../api");

// Initializes the server
module.exports = app => {

    // Express middleware that allows POSTing data
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Serve the public folder
    app.use(express.static(config.clientDir));

    // Set up the routes
    initApi(app);
}