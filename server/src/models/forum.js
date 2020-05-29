const { query } = require("../loaders/db.wrapper");

const mysql = require("mysql");

const q_create = `INSERT INTO Forums ( 
                                        forum_name, 
                                        description, 
                                        amount_of_posts, 
                                        amount_of_members,
                                        owner_id
                                    ) 
                                    VALUES (?, ?, ?, ?, ?)`;
const q_exists = "SELECT * FROM Forums WHERE forum_id = ?";
const q_all = "SELECT * FROM Forums";
const q_inc_members = "UPDATE Forums SET amount_of_members = IFNULL(amount_of_members, 0) + 1 WHERE forum_id = ?";
const q_dec_members = "UPDATE Forums SET amount_of_members = amount_of_members - 1 WHERE forum_id = ?";
const q_inc_posts = "UPDATE Forums SET amount_of_posts = IFNULL(amount_of_posts, 0) + 1 WHERE forum_id = ?";
const q_dec_posts = "UPDATE Forums SET amount_of_posts = amount_of_posts - 1 WHERE forum_id = ?";

module.exports = class Forum {
    constructor({ forum_name, description, amount_of_posts, amount_of_members, owner_id }) {
        this.name               = forum_name;
        this.description        = description;
        this.amount_of_posts    = amount_of_posts;
        this.amount_of_members  = amount_of_members;
        this.owner_id = owner_id;
    }

    async create() {
        // If the forum already exists
        if (await this.forumExists()) {
            return {
                error: "This forum already exists!"
            }
        }

        await query(q_create, [this.name, this.description, this.amount_of_posts, this.amount_of_members, this.owner_id]);
        return {};
    }

    static async incrementMembers({ forum_id }) {
        await query(q_inc_members, [forum_id]);
        return {};
    }   

    static async decrementMembers({ forum_id }) {
        await query(q_dec_members, [forum_id]);
        return {};
    }

    static async incrementPosts({ forum_id }) {
        await query(q_inc_posts, [forum_id]);
        return {};
    }

    static async decrementPosts({ forum_id }) {
        await query(q_dec_posts, [forum_id]);
        return {};
    }

    async forumExists() {
        let results = await query(q_exists, [this.name]);
        if (results.rows.length > 0) {
            return true;
        } else return false;
    }

    static async getForum(forum_id) {
        let results = await query(q_exists, [forum_id]);

        // If no forum with the specified name was found
        if (results.rows.length == 0) {
            return {
                error: `The forum with id "'${forum_id}'" does not exist`
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