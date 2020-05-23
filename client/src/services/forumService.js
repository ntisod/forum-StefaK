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

const getForum = async forum_name => {
    let data;
    try {
        data = await fetch(`${cfg.api_url}forums/${forum_name}`);
        data = await data.json();
        return JSON.parse(data);
    } catch (error) { // If the server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

const getForumPosts = async forum_name => {
    let data;
    try {
        data = await fetch(`${cfg.api_url}forums/${forum_name}/posts`);
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
    getForumPosts
}