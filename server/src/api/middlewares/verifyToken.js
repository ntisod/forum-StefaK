const ResponseObject = require("../../utils/ResponseObject");
const jwt = require("jsonwebtoken");

// Ensures that the authorization header exists and verifies the token
module.exports = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    // If the authorization header exists
    if (typeof bearerHeader !== "undefined") {
        // This is how a bearer header looks like
        // Bearer thisis.some.token
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        // Now that we (probably) have the token
        // verify that it is valid
        jwt.verify(bearerToken, process.env.SECRET_KEY, (err, data) => {
            if (err) {
                // Show a simple error message to the user
                let responseError = "";
                switch (err.name) {
                    case "TokenExpiredError": 
                        responseError = "You need to log in again";
                        break;
                    default:
                        responseError = "An unknown error has occurred";
                        break;
                }
                res.json(ResponseObject.failure({ status: 403, error: responseError }));
            } else { // If everything went well
                next();
            }
        });
    } else {
        // If the authorization header doesn't exist
        res.json(ResponseObject.failure({ status: 403 }));
    }
}