const   auth_router                  = require("express").Router();
const   { registerUser, loginUser }  = require("../../services/authService");

//NOTE: Routes in between /* */ comments are the exact same
module.exports = app => {
    /* REGISTER ROUTES */
    auth_router.post("/", async (req, res) => {
        let response = await registerUser(req.body);
        res.json(response);
    });
    auth_router.post("/register", async (req, res) => {
        let response = await registerUser(req.body);
        res.json(response);
    });
    /* REGISTER ROUTES END */

    /* LOGIN ROUTES */
    auth_router.post("/login", async (req, res) => {
        let response = await loginUser(req.body);
        res.json(response);
    });

    /* LOGIN ROUTES END */
    app.use("/api/users", auth_router);
}

