import React, { useEffect, useState } from "react";

export default props => {
    const [state, setState] = useState({
        username_value: "",
        password_value: "",
        cpassword_value: "",
        passwords_dont_match: false
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
                break;
            
            case "password":
                changePassword(event.target.value);
                break;

            case "cpassword":
                changeCPassword(event.target.value);
                break;
        }
    }

    const handleSubmit = event => {
        if (event.target.password.value != event.target.cpassword.value) 
            setState({
                passwords_dont_match: true
            });
        else {
            props.register({
                username: event.target.username.value,
                password: event.target.password.value,
                cpassword: event.target.cpassword.value
            });
        }
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" required onChange={handleChange}></input>
                <input type="password" name="password" placeholder="password" required onChange={handleChange}></input>
                <input type="password" name="cpassword" placeholder="confirm password" required onChange={handleChange}></input> 
                {state.passwords_dont_match && <p>The passwords do not match</p>}
                <input type="submit"></input>
            </form> 
        </div>
    );
}