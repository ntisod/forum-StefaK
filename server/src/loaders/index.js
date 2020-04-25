const   bodyParser      = require("body-parser"),
        express         = require("express"),
        cors            = require("cors");

const   config          = require("../config"),
        api             = require("../api"),
        initApi         = require("../api");

// Initializes the server
module.exports = app => {

    // Parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    // Parse requests of content-type - application/json
    app.use(bodyParser.json());

    // Enable CORS
    let corsOptions = {
        origin: config.origin
    }
    app.use(cors(corsOptions));

    // Serve the public folder
    app.use(express.static(config.clientDir));

    // Set up the routes
    initApi(app);
}