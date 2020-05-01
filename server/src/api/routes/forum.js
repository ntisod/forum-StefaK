const forumRouter = require("express").Router();
const { createForum } = require("../../services/forumService");

module.exports = app => {
    forumRouter.post("/", async (req, res) => {
        let response = await createForum(req.body);
        res.json(response);
    });

    forumRouter.get("/", (req, res) => {
        res.send("Getting all forums");
    });

    app.use("/api/forums", forumRouter);
}