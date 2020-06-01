const   Post            = require("../models/post"),
        User            = require("../models/user"),
        Forum           = require("../models/forum"),    
        Response_Object = require("../utils/ResponseObject");

module.exports.createPost = async postData => {
    // Validate the data
    let new_post = new Post(postData.author_id, postData.post_title, postData.post_content, postData.forum_name);
    let errors = [];
    
    // Check whether the author user exists
    let result = await User.getUser(postData.author);
    if (result.error)
        errors.push({
            type: "u",
            error: result.error
        });
    
    // Check whether the forum exists
    result = await Forum.getForum(postData.forum_name);
    if (result.error)
        errors.push({
            type: "f",
            error: result.error
        });
    
    if (!postData.title) 
        errors.push({
            type: "u",
            error: "The title was not provided"
        });

    if (!postData.content)
        errors.push({
            type: "u",
            error: "The content section cannot be empty"
        });

    // Show the error messages to the client, if any
    if (errors.length > 0)
        return Response_Object.failure({ errors });

    // Try to create the post
    result = await new_post.create();
    if (result.error)
        return Response_Object.failure({error: result.error});
    
    // Increment the amount of posts in the corresponding forum
    await Forum.incrementPosts({ forum_name: postData.forum_name });
    
    return Response_Object.success({ message: "Post created successfully"});
}

module.exports.deletePost = async post_data => {
    let result;
    // Delete the post
    result = Post.deletePost(post_data.post_id);

    // Decrement the corresponding forums amount of posts
    result = Forum.decrementPosts({ forum_name: post_data.forum_name });

    return Response_Object.success({ message: "Post deleted successfully" });
}

module.exports.getAllPosts = async _ => {
    let result = await Post.getAll();
    if (result.error)
        return Response_Object.failure({ error: result.error });
    return Response_Object.success({ posts: result.posts });
}

module.exports.getPost = async post_id => {
    let result = await Post.getPost(post_id);
    if (result.error) {
        return Response_Object.failure({
            error: result.error
        });
    }

    return Response_Object.success({
        post: result.post
    });
}