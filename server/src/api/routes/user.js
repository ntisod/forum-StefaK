const userRouter = require("express").Router();

module.exports = app => {
    userRouter.get("/", (req, res) => {
        res.send("Getting all users");
    });

    userRouter.get("/me", (req, res) => {
        res.send("Getting info about myself");
    });

    app.use("/api/users", userRouter);
}