import cfg from "../config";

const getAllForums = async _ => {
    let data;
    try {
        data = await fetch(`${cfg.api_url}forums`);
        return await data.json();
    } catch(error) { // If server shut down or something
        return {
            status: 500,
            error: "Failed to fetch the data"
        }
    }
}

export {
    getAllForums
}