import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import * as c from "./pc.styled";

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

        // IF the username or password field was empty
        if (state.username === "" || state.password === "")
            return setState(old_state => ({ ...old_state, error: "The username and password fields cannot be empty" }));

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

    return (
        <c.Root_Container>
            <c.Login_Container>
                <c.Login_Header>Log in</c.Login_Header>
                <c.Login_Form>
                    <c.Input type="text" name="username" onChange={handleChange} placeholder="username" autoComplete="off" required />
                    <c.Input type="password" name="password" onChange={handleChange} placeholder="password" autoComplete="off" required />
                    <c.Submit_Button onClick={handleSubmit}>Submit</c.Submit_Button>
                </c.Login_Form>
                {showErrors()}
            </c.Login_Container>
        </c.Root_Container>
    );
}