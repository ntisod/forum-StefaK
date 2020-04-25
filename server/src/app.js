const   express =   require("express");

const   config  =       require("./config"),
        loadAll =       require("./loaders")

async function startServer() {
    const app = express();

    // Set up different parts of the server in separate modules 
    loadAll(app);
    app.listen(config.port, err => {
        if (err) {
            console.log(err);
            process.exit(-1);
            return;
        }

        console.log("Server is running at port " + config.port);
    });
}

startServer();