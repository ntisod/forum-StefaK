const postRouter = require("express").Router();

module.exports = app => {
    app.use("/posts", postRouter);

    postRouter.post("/", (req, res) => {
        res.send("Creating a new post");
    });

    postRouter.get("/", (req, res) => {
        res.send("Getting all posts");
    })
}