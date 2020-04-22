const   useAuthRoutes = require("./routes/auth"),
        useUserRoutes = require("./routes/user");

module.exports = app => {
    useAuthRoutes(app);
    useUserRoutes(app);
}