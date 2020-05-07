const   Post            = require("../models/post"),
        User            = require("../models/user"),
        Forum           = require("../models/forum"),    
        Response_Object = require("../utils/ResponseObject");

module.exports.createPost = async postData => {
    // Validate the data
    let new_post = new Post(postData.author, postData.title, postData.content, postData.forum_name);
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

    // Show the error messages to the client, if any
    if (errors.length > 0)
        return Response_Object.failure({ errors });

    // Try to create the post
    result = await new_post.create();
    if (result.error)
        return Response_Object.failure({error: result.error});
        
    return Response_Object.success({ message: "Post created successfully"});
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