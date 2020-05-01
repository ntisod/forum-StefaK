const Response_Object = require("../utils/ResponseObject");
const User_Model = require("../models/user");

module.exports.getAllUsers = async _ => {
    let result = await User_Model.getAllUsers();
    if (result.error) {
        return Response_Object.failure({
            error: result.error
        });
    }

    // Only return the username
    return Response_Object.success(result.all_users.map(user_object => ({ username: user_object.username })));
}