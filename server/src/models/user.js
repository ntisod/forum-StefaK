const { query } = require("../loaders/db.wrapper");
const mysql = require("mysql");

const q_create = "INSERT INTO Users (username, password) VALUES (?, ?)";
const q_exists = "SELECT * FROM Users WHERE username = ?";

module.exports = class User {
    constructor({ username, password}) {
        this.username = username;
        this.password = password;
    }

    async create() {
        if (await this.userExists()) {
            return {
                error: "This username is taken"
            }
        }

        await query(q_create, [this.username, this.password]);
        return 0;
    }

    async userExists() {
        let results = await query(q_exists, [this.username]);
        if (results.rows.length >= 1) {
            return true;
        } else return false;
    }
}