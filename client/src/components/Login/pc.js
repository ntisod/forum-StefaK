import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default props => {

    // If the user is logged in, redirect them to the dashboard page
    if (props.isLoggedIn())
        return <Redirect to="/"/>

    const [state, setState] = useState({
        error: null,
        username: "",
        password: "",
    });

    // Set the username and password variables to their respective values
    // in the form
    const handleChange = event => {
        // Directly referencing to event.target.value throws an error
        // probably because setState is an async function
        let value = event.target.value;
        
        let event_name = event.target.getAttribute("name");
        switch(event_name) {
            case "username":
                setState(old_state => ({ ...old_state, username: value }));
                break;
            case "password":
                setState(old_state => ({ ...old_state, password: value }));
        }
    }

    // Login method with { username, password } as data
    const login = async _ => {
        let response = await props.login({ username: state.username, password: state.password });
        return response;
    }

    // disable refresh and call login method
    const handleSubmit = async event => {
        event.preventDefault();

        let result = await login();
        // If there were any errors, update the state
        if (result.error) {
            return setState(old_state => ({ ...old_state, error: result.error }));
        }
        else {
            // If there were no errors, the user is successfully logged in, so change the global state
            // to reflect that
            props.setLoggedIn(true);
        }   
    }

    const showErrors = _ => {
        if (state.error)
            return <p>{state.error}</p>
    }

    return <div>
        <h1>Log in</h1>
        <form>
            <input type="text" name="username" onChange={handleChange} required />
            <input type="password" name="password" onChange={handleChange} required />
            <button onClick={handleSubmit}>Submit</button>
        </form>
        {showErrors()}
    </div>
}