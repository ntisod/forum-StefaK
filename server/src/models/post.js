const { query } = require("../loaders/db.wrapper");

const q_create = `
            INSERT INTO Posts (title, content, author_id, forum_id)
            SELECT ?, ?,
                u.user_id,
                (SELECT f.forum_id FROM Forums f WHERE forum_name = ?)
                FROM Users u WHERE username = ?
        `;

const q_get_all = "SELECT * FROM Posts";
const q_exists = "SELECT * FROM Posts WHERE post_id = ?";

module.exports = class Post {
    constructor(author, title, content, forum_name) {
        this.author = author;
        this.title = title;
        this.content = content;   
        this.forum_name = forum_name;
    }

    async create() {
        // Create the post
        await query(q_create, [this.title, this.content, this.forum_name, this.author]);
        return {};
    }

    static async getAll() {
        let result = await query(q_get_all);
        if (result.rows.length == 0)
            return {
                error: "No posts found."
            }
        return {
            posts: result.rows
        }
    }

    static async getPost(post_id) {
        let result = await query(q_exists, [post_id]);
        if (result.rows.length == 0)
            return {
                error: "That post doesn't exist!"
            }
        return {
            post: result.rows[0]
        }
    }
}