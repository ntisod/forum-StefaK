import React from "react";
import styled from "styled-components";
import  { Link } from "react-router-dom";

export default forum_data => {

    console.log(forum_data);
    const renderError = _ => {
        if (forum_data.posts.error)
            return <h1>{forum_data.posts.error}</h1>
    }

    const renderPosts = _ => {
        if (forum_data.posts.status == 200)
            return forum_data.posts.posts.map(post => <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>);
    }

    return (
        <div>
            <div>
                <h1>{forum_data.forum.forum_name}</h1>
                <h1>{forum_data.forum.description}</h1>
                <h1>{forum_data.forum.created_at}</h1>
                <h1>Amount of members: {forum_data.forum.amount_of_members || 0}</h1>
            </div>

            <div>
                <h1>Amount of posts: {forum_data.forum.amount_of_posts || 0}</h1>
                <div>
                    {renderError()}
                    {renderPosts()}
                </div>
            </div>
        </div>
    )
}