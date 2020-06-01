const   bcrypt  = require("bcrypt"),
        jwt     = require("jsonwebtoken");

const   ResponseObject  = require("../utils/ResponseObject"),
        User            = require("../models/user");

module.exports.loginUser = async userData => {
    // If the username or the password weren't provided, something unexpected happened
    // just return an empty object and prevent crash;
    if (!userData.username || !userData.password)
        return {};

    // Get the user from the database
    let db_data = await User.getUserByUsername(userData.username);
    
    // If there was an error while retrieving the user
    // send the error to the front end
    if (db_data.error)
        return ResponseObject.failure({ error: db_data.error });
    
    // Verify the password
    if (!bcrypt.compareSync(userData.password, db_data.user.password)) {
        // Password do not match
        return ResponseObject.failure({ error: "Wrong password" });
    }

    // Sign the token once the user info is verified
    const token = jwt.sign( 
                            {
                                username: userData.username
                            }, 
                            process.env.SECRET_KEY,
                            {expiresIn: "30m"} // TODO: Refresh the token once the expiresIn is very low
                        );
    
    // Send the token to the front end
    return ResponseObject.success({ token });
}

module.exports.registerUser = async userData => {
    // Validation happens on the front end
    // this just ensures that the server doesn't accidentaly crash
    if (!userData.username || !userData.password)
        return;

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