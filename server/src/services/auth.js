const   bcrypt  = require("bcrypt"),
        jwt     = require("jsonwebtoken");

const   ResponseObject  = require("../utils/ResponseObject"),
        User            = require("../models/user");

module.exports.loginUser = async userData => {
    // Get the user from the database
    let userInDb = await User.getUser(userData.username);

    // If there was an error while retrieving the user
    // send the error to the front end
    if (userInDb.error)
        return ResponseObject.failure({ error: userInDb.error });

    // Verify the password
    if (!bcrypt.compareSync(userData.password, userInDb.password)) {
        // Password do not match
        return ResponseObject.failure({ error: "Wrong password" });
    }

    // Sign the token once the user info is verified
    const token = jwt.sign( 
        register          {userData}, 
                            process.env.SECRET_KEY,
                            {expiresIn: "30s"}
                        );
    
    // Send the token to the front end
    return ResponseObject.success({ token });
}

module.exports.registerUser = async userData => {
    // If the passwords do not match
    if (userData.password !== userData.cpassword) {
        return ResponseObject.failure({ error: "The passwords do not match" });
    }
    // Hash the password
    const passwordHash = bcrypt.hashSync(userData.password, 10);

    // Create a new user
    let newUser = new User({ username: userData.username, password: passwordHash });
    let returnVal = await newUser.create();
    if (returnVal.error) {
        return ResponseObject.failure({ ...returnVal });
    }
    // The user was successfully created
    return ResponseObject.success({});
}