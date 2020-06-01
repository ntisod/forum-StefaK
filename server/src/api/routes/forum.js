const forum_router = require("express").Router();
const { createForum, getForum, getAllForums, getForumPosts } = require("../../services/forumService");
const verifyToken = require("../middlewares/verifyToken");

module.exports = app => {
    // Create forum 
    forum_router.post("/", verifyToken, async (req, res) => {
        let response = await createForum({ ...req.body, owner_id: res.locals.user_id});
        console.log(req.body);
        console.log(res.locals.user_id)
        res.json(response);
    });

    // Get all forums 
    forum_router.get("/", async (req, res) => {
        let response = await getAllForums();
        res.json(response);
    });

    // Get a specific forum
    forum_router.get("/:forum_id", async (req, res) => {
        let response = await getForum(req.params.forum_id);
        res.json(response);
    });

    // Get all posts for a specific forum
    forum_router.get("/:forum_id/posts", async (req, res) => {
        let response = await getForumPosts(req.params.forum_id);
        res.json(response);
    });
    
    app.use("/api/forums", forum_router);
}