const   authRouter                  = require("express").Router();
const   { registerUser, loginUser } = require("../../services/auth");

module.exports = app => {
    authRouter.post("/", (req, res) => {
        res.send("Creating a new user");
    });

    authRouter.post("/login", (req, res) => {
        let response = loginUser(req.body);
        res.send(response);
    });

    authRouter.post("/register", async (req, res) => {
        let response = await registerUser(req.body);
        res.send(response);
    });

    authRouter.post("/logout", (req, res) => {
        res.send("Logging out");
    }); 

    app.use("/api/users", authRouter);
}

