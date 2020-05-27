import React, { useState } from "react";

export default props => {

    const [state, setState] = useState({
        error: null
    });
    
    let username, password;

    // Set the username and password variables to their respective values
    // in the form
    const handleChange = event => {
        let event_name = event.target.getAttribute("name");
        if (event_name == "username")
            username = event.target.value;
        if (event_name == "password")
            password = event.target.value;
    }

    // Login method with { username, password } as data
    const login = async _ => {
        console.log(password);
        let response = await props.login({ username, password });
        console.log(response);
        return response;
    }
    
    // disable refresh and call login method
    const onSubmit = async event => {
        event.preventDefault();
        let result = await login();
        // If there were any errors, update the state
        if (result.error)
            setState({
                error: result.error
            });
        
        // If there were no errors, the user is successfully logged in, so change the global state
        // to reflect that
        console.log(props)
        props.setLoggedIn(true);
    }

    const showErrors = _ => {
        if (state.error)
            return <p>{state.error}</p>
    }

    return <div>
        <h1>Log in</h1>
        <form onSubmit={onSubmit}>
            <input type="text" name="username" onChange={handleChange} required/>
            <input type="password" name="password" onChange={handleChange} required />
            <input type="submit" />
        </form>
        {showErrors()}
    </div>
}