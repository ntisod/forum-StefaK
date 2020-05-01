const { query } = require("../loaders/db.wrapper");

const mysql = require("mysql");

const q_create = `INSERT INTO Forums ( 
                                        name, 
                                        description, 
                                        amount_of_posts, 
                                        amount_of_members
                                    ) 
                                    VALUES (?, ?, ?, ?)`;
const q_exists = "SELECT * FROM Forums WHERE name = ?";

module.exports = class Forum {
    constructor({ name, description, amount_of_posts, amount_of_members} ) {
        this.name               = name;
        this.description        = description;
        this.amount_of_posts    = amount_of_posts;
        this.amount_of_members  = amount_of_members;
    }

    async create() {
        // If the forum already exists
        if (await this.forumExists()) {
            return {
                error: "This forum already exists!"
            }
        }

        await query(q_create, [this.name, this.description, this.amount_of_posts, this.amount_of_members]);
        return {};
    }

    async incrementMember() {

    }

    async decrementMember() {

    }

    async incrementPost() {

    }

    async decrementPost() {

    }

    async forumExists() {
        let results = await query(q_exists, [this.name]);
        if (results.rows.length > 0) {
            return true;
        } else return false;
    }

    static async getForum(_forumName) {
        let results = await query(q_exists, [_forumName | this.name]);

        // If no forum with the specified name was found
        if (results.rows.length == 0) {
            return {
                error: `The forum: '${_forumName | this.name}' does not exist`
            }
        }

        // Return the forum data
        return {
            ...results.rows[0]
        }
    }
}