import React, { useState, useEffect } from "react";
import * as c from "./pc.styled";

export default function(props) {
    const [posts, setPosts] = useState([]);

    // Run the fetch in useEffect to prevent infinite loop
    useEffect(_ => {
        const fetchPosts = async _ => {
            let response = await props.getAllPosts();
            setPosts(response.posts);
        };
        
        fetchPosts();
    }, []);

    const showPosts = _ => {
        return posts.map(post => 
            <c.Post_Container>
                <c.Post_Info>
                    <c.Post_Info_Row>Posted by: <b>author</b></c.Post_Info_Row>
                    <c.Post_Info_Row>In Forum:  {post.forum_name}</c.Post_Info_Row>
                </c.Post_Info>
                <c.Post_Lower_Container>
                    <c.Post_Title>{post.title}</c.Post_Title>
                </c.Post_Lower_Container>
            </c.Post_Container>    
        )
    }

    return (
        <c.Root_Container>
            <c.Posts_Heading>Posts</c.Posts_Heading>
            {posts.length > 0 && showPosts()}
        </c.Root_Container>
    )
}