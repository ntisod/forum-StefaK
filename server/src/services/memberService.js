const Forum = require("../models/forum");
const Member = require("../models/member");
const Response_Object = require("../utils/ResponseObject");
const User = require("../models/user");

module.exports.createMember = async ({ user_id, forum_id }) => {
    // Ensure that the server doesn't crash if the data is missing
    if (!user_id || !forum_id)
        return;
        
    // Try to create a member
    let new_member = new Member({ user_id, forum_id });
    let result = await new_member.create();
    if (result.error)
        return Response_Object.failure({ error: result.error });

    // Increment the amount of members variable in the related forum
    Forum.incrementMembers({ forum_id });

    return Response_Object.success({ message: "Member created successfully" });
}