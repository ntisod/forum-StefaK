const   Forum           = require("../models/forum"),
        ResponseObject  = require("../utils/ResponseObject");

module.exports.createForum = async forumData => {
    // Validate the data
    let errorMessages = [];
    if (!forumData.name)
        errorMessages.push("No forum name specified.");
    
    // If there were any errros show the error messages to the client
    if (errorMessages.length > 0)
        return ResponseObject.failure({
            errors: errorMessages
        });

    // Try to create the forum
    let newForum = new Forum(forumData);
    let result = await newForum.create();
    if (result.error) {
        return ResponseObject.failure({error: result.error});
    }

    // Forum successfully created
    return ResponseObject.success({
        message: "Forum created successfully"
    });
}