const   useAuthRoutes   = require("./routes/auth"),
        useUserRoutes   = require("./routes/user"),
        useForumRoutes  = require("./routes/forum"),
        usePostRoutes   = require("./routes/post"),
        useMemberRoutes = require("./routes/member"),
        { verifyToken } = require("./middlewares");

module.exports = app => {
    useAuthRoutes(app);
    useUserRoutes(app);
    useForumRoutes(app);
    usePostRoutes(app);
    useMemberRoutes(app);
    
    // 404 Route
    app.get("*", (req, res) => {
        res.json({
            status: 404,
            error: "Not found"
        });
    });

    // TEMPORARY TEST ROUTES
    app.get("/api/protected/", verifyToken, (req, res) => {
        res.send("This is a protected route");
    });
}