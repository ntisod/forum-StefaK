const   useAuthRoutes   = require("./routes/auth"),
        useUserRoutes   = require("./routes/user"),
        { verifyToken } = require("./middlewares");

module.exports = app => {
    useAuthRoutes(app);
    useUserRoutes(app);

    // TEMPORARY TEST ROUTES
    app.get("/api/protected/", verifyToken, (req, res) => {
        res.send("This is a protected route");
    });
}