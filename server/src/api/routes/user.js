const user_Router = require("express").Router();
const user_Service = require("../../services/userService");

module.exports = app => {
    user_Router.get("/", async (req, res) => {
        let response = await user_Service.getAllUsers();
        res.json(response);
    });

    user_Router.get("/me", (req, res) => {
        res.send("Getting info about myself");
    });

    app.use("/api/users", user_Router);
}