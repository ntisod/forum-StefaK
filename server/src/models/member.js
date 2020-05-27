const { query } = require("../loaders/db.wrapper");

const mysql = require("mysql");

const q_create = `INSERT INTO Members ( 
                                        user_id, 
                                        forum_id
                                    )
                                    VALUES (?, ?)`;
const q_exists = "SELECT * FROM Members WHERE user_id = ? AND forum_id = ?";

module.exports = class Member {
    constructor({ user_id, forum_id }) {
        this.user_id = user_id;
        this.forum_id = forum_id;
    }

    async create() {
        // If the member already exists
        if (await this.memberExists()) {
            return {
                error: "This member already exists!"
            }
        }

        await query(q_create, [this.user_id, this.forum_id]);
        return {};
    }

    async memberExists() {
        let results = await query(q_exists, [this.user_id, this.forum_id]);
        if (results.rows.length > 0) {
            return true;
        } else return false;
    }
}