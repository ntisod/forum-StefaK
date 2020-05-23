import cfg from "../config"

// COntinue working here, all is ok here.
const register = async data => {
        const raw_response = await fetch(`${cfg.api_url}users`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    console.log(await raw_response.json());
}

export {
    register
}