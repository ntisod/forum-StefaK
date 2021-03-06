const { query } = require("../loaders/db.wrapper");

const mysql = require("mysql");

const q_create          = "INSERT INTO Users (username, password) VALUES (?, ?)";
const q_exists          = "SELECT * FROM Users WHERE user_id = ?";
const q_exists_uname    = "SELECT * FROM Users WHERE username = ?";
const q_get_all         = "SELECT * FROM Users";

module.exports = class User {
    constructor({ username, password}) {
        this.username = username;
        this.password = password;
    }

    async create() {
        if (await this.userExists()) {
            return {
                error: "This username is taken!"
            };
        }

        await query(q_create, [this.username, this.password]);
        return {}
    }

    async userExists() {
        let results = await query(q_exists_uname, [this.username]);
        if (results.rows.length > 0) {
            return true;
        } else return false;
    }

    static async getUser(user_id) {
        let results = await query(q_exists, [user_id]);
        console.log(results.rows)
        if (results.rows.length >= 1) {
            return {
                user: results.rows[0]
            }
        } else return {
            error: "The specified user does not exist!"
        }
    }

    static async getUserByUsername(username) {
        let results = await query(q_exists_uname, [username]);
        console.log(results.rows)
        if (results.rows.length >= 1) {
            return {
                user: results.rows[0]
            }
        } else return {
            error: "The specified user does not exist!"
        }
    }

    static async getAllUsers() {
        let results = await query(q_get_all);
        // If no users were found
        if (results.length == 0)
            return {
                error: "No users have been found"
            }
            
        // If no errors occured, return all users
        return {
            all_users: results.rows
        }
    }
}