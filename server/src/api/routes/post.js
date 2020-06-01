const postRouter = require("express").Router();
const { createPost, getAllPosts, getPost, deletePost } = require("../../services/postService");
const verifyToken = require("../middlewares/verifyToken");

module.exports = app => {
    // Create a new post
    postRouter.post("/", verifyToken, async (req, res) => {
        let response = await createPost({ ...req.body, author_id: res.locals.user_id });
        res.json(response);
    });

    // Get all posts
    postRouter.get("/", async (req, res) => {
        let response = await getAllPosts();
        res.json(response);
    });

    // Get a specific post
    postRouter.get("/:post_id", async (req, res) => {
        let response = await getPost(req.params.post_id);
        res.json(response);
    });

    // Delete a specific post
    postRouter.delete("/:post_id", async (req, res) => {
        let response = await deletePost(req.params.post_id);
        res.json(response);
    });

    app.use("/api/posts", postRouter);
}
