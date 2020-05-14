const { query } = require("../loaders/db.wrapper");

const mysql = require("mysql");

const q_create = `INSERT INTO Forums ( 
                                        forum_name, 
                                        description, 
                                        amount_of_posts, 
                                        amount_of_members
                                    ) 
                                    VALUES (?, ?, ?, ?)`;
const q_exists = "SELECT * FROM Forums WHERE forum_name = ?";
const q_all = "SELECT * FROM Forums";

module.exports = class Forum {
    constructor({ forum_name, description, amount_of_posts, amount_of_members}) {
        this.name               = forum_name;
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
                error: `The forum: '${_forumName}' does not exist`
            }
        }

        // Return the forum data
        return {
            forum: results.rows[0]
        }
    }

    static async getAllForums() {
        // Get all the forums
        let result = await query(q_all);

        // If no forums exist
        if (result.rows.length == 0)
            return {
                error: "There are no forums to be found!"
            }
        
        // If at least one forum was found
        return {
            forums: result.rows
        }
    }
}