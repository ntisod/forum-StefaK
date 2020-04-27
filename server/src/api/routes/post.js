const postRouter = require("express").Router();

module.exports = app => {
    postRouter.post("/", (req, res) => {
        res.send("Creating a new post");
    });

    postRouter.get("/", (req, res) => {
        res.send("Getting all posts");
    });

    app.use("/posts", postRouter);
}