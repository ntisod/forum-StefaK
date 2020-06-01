import cfg from "../config";

async function getAllPosts() {
    let data;
    try {
        data = await fetch(`${cfg.api_url}posts`);
        data = await data.json();
        return JSON.parse(data);
    } catch(error) { // If server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

async function createPost({ post_title, post_content, forum_name }) {
    const raw_response = await fetch(`${cfg.api_url}posts`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ post_title, post_content, forum_name  })
    });
    
    return JSON.parse(await raw_response.json());
}

export {
    getAllPosts,
    createPost
}