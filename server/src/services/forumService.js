const   Forum           = require("../models/forum"),
        Response_Object  = require("../utils/ResponseObject"),
        Post            = require("../models/post");

module.exports.createForum = async forumData => {
    let result;

    // Validate the data
    let errorMessages = [];
    if (!forumData.forum_name)
        errorMessages.push("No forum name specified.");

    // If there were any errros show the error messages to the client
    if (errorMessages.length > 0)
        return Response_Object.failure({
            errors: errorMessages
        });

    // Try to create the forum
    let newForum = new Forum(forumData);
    result = await newForum.create();
    if (result.error) {
        return Response_Object.failure({error: result.error});
    }

    // Forum successfully created
    return Response_Object.success({
        message: "Forum created successfully"
    });
}

module.exports.getForum = async forum_id => {
    // Try to retrieve the forum info 
    let result = await Forum.getForum(forum_id);
    console.log(result)
    if (result.error)
        return Response_Object.failure({ error: result.error });
    return Response_Object.success({ ...result });
}

module.exports.getAllForums = async _ => {
    // Try to retrieve all forums
    let result = await Forum.getAllForums();
    if (result.error)
        return Response_Object.failure({ error: result.error });
    return Response_Object.success({ ...result });
}

module.exports.getForumPosts = async forum_id => {
    // Get all the posts for the forum
    result = await Post.getForumPosts(forum_id);
    if (result.error) 
        return Response_Object.failure({ error: result.error });

    return Response_Object.success({ ...result });
}