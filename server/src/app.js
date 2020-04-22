const   express =   require("express");

const   config  =       require("./config"),
        loadAll =       require("./loaders"),
        db      =       require("./models/index");  

async function startServer() {
    const app = express();

    // Set up different parts of the server in separate modules 
    loadAll(app);

    // Sync the sequelize models and then start the server
    // force: true will wipe the database on each server restart
    // this is ideal for development when the models are often changed
    db.sequelize.sync({ force: true })
        .then(_ => {
            // Start the server after the database connection was successfully
            // established
            app.listen(config.port, err => {
                if (err) {
                    console.log(err);
                    process.exit(-1);
                    return;
                }
        
                console.log("Server is running at port " + config.port);
            });
        });
}

startServer();