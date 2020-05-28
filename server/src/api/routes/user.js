const user_Router = require("express").Router();
const user_Service = require("../../services/userService");
const verifyToken   = require("../middlewares/verifyToken");

module.exports = app => {
    user_Router.get("/", async (req, res) => {
        let response = await user_Service.getAllUsers();
        res.json(response);
    });

    user_Router.get("/:user_id", async (req, res) => {
        let response = await user_Service.getUser(req.params.user_id);
        res.json(response);
    });

    user_Router.get("/me", verifyToken, (req, res) => {
        // TODO
        res.send("Getting info about myself");
    });


    app.use("/api/users", user_Router);
}