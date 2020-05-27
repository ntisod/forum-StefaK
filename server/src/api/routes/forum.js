const forum_router = require("express").Router();
const { createForum, getForum, getAllForums, getForumPosts } = require("../../services/forumService");

module.exports = app => {
    // Create forum 
    forum_router.post("/", async (req, res) => {
        let response = await createForum(req.body);
        res.json(response);
    });

    // Get all forums 
    forum_router.get("/", async (req, res) => {
        let response = await getAllForums();
        res.json(response);
    });

    // Get a specific forum
    forum_router.get("/:forum_name", async (req, res) => {
        let response = await getForum(req.params.forum_name);
        res.json(response);
    });

    // Get all posts for a specific forum
    forum_router.get("/:forum_name/posts", async (req, res) => {
        let response = await getForumPosts(req.params.forum_name);
        res.json(response);
    });
    
    app.use("/api/forums", forum_router);
}