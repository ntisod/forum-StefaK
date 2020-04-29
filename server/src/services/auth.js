const   bcrypt  = require("bcrypt"),
        jwt     = require("jsonwebtoken");

const   ResponseObject  = require("../utils/ResponseObject"),
        User            = require("../models/user");

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
    // If the passwords do not match
    if (userData.password !== userData.cpassword) {
        return ResponseObject.failure({ error: "The passwords do not match", status: -1 });
    }
    // Hash the password
    const passwordHash = bcrypt.hashSync(userData.password, 10);

    // Create a new user
    let newUser = new User({ username: userData.username, password: passwordHash });
    let rval = await newUser.create();
    if (rval.error) {
        return ResponseObject.failure({ ...rval, status: -1 });
    }
    // The user was successfully created
    return ResponseObject.success({});
}