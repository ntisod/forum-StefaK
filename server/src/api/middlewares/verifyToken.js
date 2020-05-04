const Response_Object = require("../../utils/ResponseObject");
const jwt = require("jsonwebtoken");

// Ensures that the authorization header exists and verifies the token
module.exports = (req, res, next) => {
    const bearer_header = req.headers["authorization"];
    // If the authorization header exists
    if (typeof bearer_header !== "undefined") {
        // This is how a bearer header looks like
        // Bearer thisis.some.token
        const bearer = bearer_header.split(" ");
        const bearer_token = bearer[1];

        // Now that we (probably) have the token
        // verify that it is valid
        jwt.verify(bearer_token, process.env.SECRET_KEY, (err, data) => {
            if (err) {
                // Show a simple error message to the user
                let response_error = "";
                switch (err.name) {
                    case "TokenExpiredError": 
                        response_error = "You need to log in again";
                        break;
                    default:
                        response_error = "An unknown error has occurred";
                        break;
                }
                res.json(Response_Object.failure({ status: 403, error: response_error }));
            } else { // If everything went well
                next();
            }
        });
    } else {
        // If the authorization header doesn't exist
        res.json(Response_Object.failure({ status: 403 }));
    }
}