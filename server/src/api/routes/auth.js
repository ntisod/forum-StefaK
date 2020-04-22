const   authRouter    = require("express").Router();
const   { registerUser } = require("../../services");

module.exports = app => {
    authRouter.post("/", (req, res) => {
        res.send("Creating a new user");
    });

    authRouter.post("/login", (req, res) => {
        res.send("Logging in");
    });

    authRouter.post("/register", (req, res) => {
        let response = registerUser(req.body);
        res.send(response);
    });

    authRouter.post("/logout", (req, res) => {
        res.send("Logging out");
    }); 

    app.use("/api/users", authRouter);
}

