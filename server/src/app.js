const   express =   require("express");

const   config          =   require("./config"),
        loadAll         =   require("./loaders"),
        { connectToDb } =   require("./loaders/db.wrapper");

async function startServer() {
    const app = express();

    // Set up different parts of the server in separate modules 
    loadAll(app);

    connectToDb(_ => {
        // If the database connection is established
        // the server can listen
        app.listen(config.port, err => {
            if (err) {
                throw new Error(err);
            }
            console.log("Server is running at port " + config.port);
        });
    });
}

startServer();