import React from "react";
import Component from "../Component";
import { getAllPosts } from "../../services/postService";
import { getForumName } from "../../services/forumService";
import { getUserName } from "../../services/userService";

import Posts_PC from "./pc";

export default class Posts extends Component {
    constructor(props) {
        super(props);
    }

    async getAllPosts() {
        let response = await getAllPosts();
        
        // I want to also get the author and forum names instead of displaying their ids
        let posts = await Promise.all(response.posts.map(async post => {
            return {
                ...post,
                user_name: await getUserName(post.author_id),
                forum_name: await getForumName(post.forum_id)
            }
        }));

        // Returns all the posts
        return { posts }
    }

    render() {
        return (
            <>
                { !this.state.is_mobile ? <Posts_PC {...this.props} getAllPosts={this.getAllPosts} /> : null }
            </>
        )
    }
}