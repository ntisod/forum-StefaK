const Response_Object = require("../utils/ResponseObject");
const User_Model = require("../models/user");

module.exports.getAllUsers = async _ => {
    let result = await User_Model.getAllUsers();
    if (result.error) {
        return Response_Object.failure({
            error: result.error
        });
    }

    // Only return the username, and eventually other public data
    return Response_Object.success(result.all_users.map(user_object => ({ username: user_object.username })));
}

module.exports.getUser = async user_id => {
    let result = await User_Model.getUser(user_id);
    // Result is either an obj with an error or wth an user
    if (result.error)
        return Response_Object.failure({ error: result.error });
    return Response_Object.success({ ...result });
}

module.exports.getUserByUsername = async username => {
    let result = await User_Model.getUserByUsername(username);
        // Result is either an obj with an error or wth an user
    if (result.error)
        return Response_Object.failure({ error: result.error });
    return Response_Object.success({ ...result });
}