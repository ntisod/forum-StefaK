const postRouter = require("express").Router();
const { createPost, getAllPosts, getPost, deletePost } = require("../../services/postService");

module.exports = app => {
    postRouter.post("/", async (req, res) => {
        let response = await createPost(req.body);
        res.json(response);
    });

    postRouter.get("/", async (req, res) => {
        let response = await getAllPosts();
        res.json(response);
    });

    postRouter.get("/:post_id", async (req, res) => {
        let response = await getPost(req.params.post_id);
        res.json(response);
    });

    postRouter.delete("/:post_id", async (req, res) => {
        let response = await deletePost(req.params.post_id);
        res.json(response);
    });

    app.use("/api/posts", postRouter);
}
