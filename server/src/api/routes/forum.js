const forumRouter = require("express").Router();
const { createForum, getForum } = require("../../services/forumService");

module.exports = app => {
    // Create forum 
    forumRouter.post("/", async (req, res) => {
        let response = await createForum(req.body);
        res.json(response);
    });

    // Get all forums 
    forumRouter.get("/", async (req, res) => {
        let response = await getAllForums();
    });

    // Get a specific forum
    forumRouter.get("/:name", async (req, res) => {
        let response = await getForum({ name: req.params.name });
        res.json(response);
    });

    app.use("/api/forums", forumRouter);
}