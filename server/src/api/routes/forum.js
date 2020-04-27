const forumRouter = require("express").Router();

module.exports = app => {
    forumRouter.post("/", (req, res) => {
        res.send("Creating a new post");
    });

    forumRouter.get("/", (req, res) => {
        res.send("Getting all posts");
    });

    app.use("/forum", postRouter);
}