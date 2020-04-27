const   bcrypt  = require("bcrypt"),
        jwt     = require("jsonwebtoken");

const   ResponseObject = require("../utils/ResponseObject");

module.exports.loginUser = userData => {
    // Sign the token once the user info is verified
    const token = jwt.sign( 
                            {userData}, 
                            process.env.SECRET_KEY,
                            {expiresIn: "30s"}
                        );
    
    return ResponseObject.success({ token, userData });
}

module.exports.registerUser = async userData => {
    const passwordHash = bcrypt.hashSync(userData.password, 10);
}