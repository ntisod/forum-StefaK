const member_router = require("express").Router();
const { createMember } = require("../../services/memberService");

module.exports = app => {
    // Create a new member
    member_router.post("/:forum_name/members", async (req, res) => {
        let response = await createMember(req.body);
        res.json(response);
    });

    app.use("/api/forums", member_router);
}