const crypto = require("crypto");

const { User } = require("../models");

module.exports.login = userData => {
    console.log(userData);
    return {
        loggedIn: true
    }
}

module.exports.registeruser = async userData => {

}