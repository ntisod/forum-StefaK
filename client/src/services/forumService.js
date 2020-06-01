import cfg from "../config";

// Only send the forum name and description. The server will find owner_id by itself with the username from the token ( is this bad??? )
const createForum = async ({ forum_name, forum_description }) => {
    const raw_response = await fetch(`${cfg.api_url}forums`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ forum_name, forum_description  })
    });
    
    return JSON.parse(await raw_response.json());
}

const getAllForums = async _ => {
    let data;
    try {
        data = await fetch(`${cfg.api_url}forums`);
        data = await data.json();
        return JSON.parse(data);
    } catch(error) { // If server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

const getForum = async forum_id => {
    let data;
    try {
        data = await fetch(`${cfg.api_url}forums/${forum_id}`);
        data = await data.json();
        return JSON.parse(data);
    } catch (error) { // If the server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

const getForumName = async forum_id => {
    // Just get the forum and only return the name
    let response = await getForum(forum_id);
    return response.forum.forum_name;
}

// Get all the forums that the currently logged in user is a port of
const getMyForums = async forum_id => {

}

const getForumPosts = async forum_id => {
    let data;
    try {
        data = await fetch(`${cfg.api_url}forums/${forum_id}/posts`);
        data = await data.json();
        return JSON.parse(data);
    } catch (error) { // If the server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

export {
    getAllForums,
    getForum,
    getForumPosts,
    getForumName,
    createForum
}