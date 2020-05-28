import cfg from "../config";

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
    getForumName
}