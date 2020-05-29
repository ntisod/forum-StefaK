import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import * as c from "./pc.styled";

export default props => {
    const [state, setState] = useState({
        username_value: "",
        password_value: "",
        cpassword_value: "",
        passwords_dont_match: false,
        registration_successful: false,
        redirect: false,
        error: "",
    });

    const changeUsername = new_username => {
        setState(old_state => ({
            ...old_state,
            username_value: new_username
        }));
    }

    const changePassword = new_password => {
        setState(old_state => ({
            ...old_state,
            password_value: new_password
        }));
    }

    const changeCPassword = new_cpassword => {
        setState(old_state => ({
            ...old_state,
            cpassword_value: new_cpassword
        }));
    }

    const handleChange = event => {
        const event_name = event.target.getAttribute("name");
        switch(event_name) {
            case "username":
                changeUsername(event.target.value);
                // Make the error from the server response dissapear if the username is changed 
                makeErrorDissappear();
                break;
            
            case "password":
                changePassword(event.target.value);
                break;

            case "cpassword":
                changeCPassword(event.target.value);
                break;
        }
    }

    // Make the error dissapear
    const makeErrorDissappear = _ => {
        setState(old_state => ({
            ...old_state,
            error: ""
        }));
    }

    const handleSubmit = async event => {
        // This function must be called before the fist await
        event.preventDefault();

        // Reset the password error on submit so that if the user types in the same passwords, but wrong username, the password error is hidden
        setState(old_state => ({
            ...old_state,
            passwords_dont_match: false
        }));

        // If the passwords do not match
        if (event.target.password.value != event.target.cpassword.value) 
            setState(old_state => ({
                ...old_state,
                // Setting this to true will make an password-related error appear to the user
                passwords_dont_match: true
            }));
        // If the passwords match
        else {
            // response is the servers response, in this case either status: 200 or an error and status: -1
            let response = await props.register({
                username: event.target.username.value,
                password: event.target.password.value,
                cpassword: event.target.cpassword.value
            });

            // If there was an error
            if (response.status == -1) {
                setState(old_state => ({
                    ...old_state,
                    error: response.error
                }));
            } else 
            {
                // If there were no errors, show a success message and redirect to login
                setState(old_state => ({
                    ...old_state,
                    registration_successful: true
                }));
            }
        }
    }

    const showRegisterForm = _ => (
        <c.Root_Container>
            <c.Register_Container>
                <c.Register_Header>Register</c.Register_Header>
                <c.Register_Form onSubmit={handleSubmit}>
                    <c.Input type="text" name="username" placeholder="username" required onChange={handleChange} autoComplete="off"></c.Input>
                    <c.Input type="password" name="password" placeholder="password" required onChange={handleChange} autoComplete="off"></c.Input>
                    <c.Input type="password" name="cpassword" placeholder="confirm password" required onChange={handleChange} autoComplete="off"></c.Input> 
                    <c.Submit_Button>Submit</c.Submit_Button>
                    {state.passwords_dont_match && <p>The passwords do not match</p>}
                    {state.error.length > 0 && <p>{state.error}</p>}
                    {!state.passwords_dont_match && !state.error && <p>.</p>}
                </c.Register_Form>
            </c.Register_Container>
        </c.Root_Container>
    );

    const showSuccessMessage = _ => {
        // First schedule the redirect function to run after 3 seconds from now
        setTimeout(_ => setState(old_state => ({
            ...old_state,
            redirect: true
        })), 3000);

        // Then return the success message to be displayed
        return <h1>Registration successful!</h1>;
    };

    if (state.redirect)
        return <Redirect to="/login" />
    if (state.registration_successful)
        return showSuccessMessage();
    if (!state.registration_successful)
        return showRegisterForm(); 
}