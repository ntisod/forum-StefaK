import cfg from "../config"

// Function for posting user registration data to the server and retrieving the response
const register = async data => {
  const raw_response = await fetch(`${cfg.api_url}users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

  return JSON.parse(await raw_response.json());
}

// Function for posting user login data to the server and retrieving the response
const login = async data => {
  const raw_response = await fetch(`${cfg.api_url}users/login`, {
    method: "POST",
    headers: {
      // Which format the response should be in
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  // Turn the raw response into an object
  const response_object = JSON.parse(await raw_response.json());

  // Store the token in the localStorage
  localStorage.setItem("token", response_object.token);

  return { response_object };
}

export {
    register,
    login
}