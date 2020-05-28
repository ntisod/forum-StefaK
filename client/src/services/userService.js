import cfg from "../config"

async function getAllUsers() {
    let data;
    try {
        data = await fetch(`${cfg.api_url}users/`);
        data = await data.json();
        return JSON.parse(data);
    } catch (error) { // If the server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

async function getUser(user_id) {
    let data;
    try {
        data = await fetch(`${cfg.api_url}users/${user_id}`);
        data = await data.json();
        return JSON.parse(data);
    } catch (error) { // If the server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

async function getUserName(user_id) {
    // Just get the user and only return username
    let response = await getUser(user_id);
    return response.user.username;
}

export {
    getAllUsers,
    getUser,
    getUserName
}