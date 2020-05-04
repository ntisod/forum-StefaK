const user_Router = require("express").Router();
const user_Service = require("../../services/userService");
const verifyToken   = require("../middlewares/verifyToken");

module.exports = app => {
    user_Router.get("/", async (req, res) => {
        let response = await user_Service.getAllUsers();
        res.json(response);
    });

    user_Router.get("/me", verifyToken, (req, res) => {
        // TODO
        // For this I will need to store the username somewhere on the client side
        res.send("Getting info about myself");
    });

    app.use("/api/users", user_Router);
}