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

export {
    getAllPosts
}