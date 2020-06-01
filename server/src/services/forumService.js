const   Forum           = require("../models/forum"),
        Response_Object  = require("../utils/ResponseObject"),
        Post            = require("../models/post");

module.exports.createForum = async ({ forum_name, forum_description, owner_id }) => {
    let result;

    // Shouldn't happen
    if (!forum_name || !owner_id)
        return {};

    // Try to create the forum
    let newForum = new Forum({ forum_name, forum_description, owner_id });
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