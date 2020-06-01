import * as c from "./pc.styled";
import React, { useState } from "react";

export default function(props) {
    
    const [state, setState] = useState({
        name: "",
        description: "",
        error: "",
        success: false
    });

    function handleChange(event) {
        // Directly referencing to event.target.value throws an error
        // probably because setState is an async function
        let value = event.target.value;

        let event_name = event.target.getAttribute("name");
        if (event_name === "forum_name")
            setState(old_state => ({ ...old_state, name: value }));
        if (event_name === "forum_description")
            setState(old_state => ({ ...old_state, description: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // In case the required name field is empty
        if (state.name === "")
            return setState(old_state => ({ ...old_state, error: "The name field cannot be empty" }));

        // Otherwise send the data and retrieve the response
        let response = await props.createForum({ forum_name: state.name, forum_description: state.description });
        // If the forum was successfully created, set the state to show the success message
        if (response.status === 200)
            setState(old_state => ({ ...old_state, success: true }));

        // If there was an error set the state to show the error
        if (response.error && response.error != "")
            setState(old_state => ({ ...old_state, error: response.error }));
    }

    function showError() {
        if (state.error.length > 0)
            return <p>{state.error}</p>
        else return <p>.</p>
    }

    // If a forum was successfully created, show the success message and close it after 3 seconds
    if (state.success) {
        setTimeout(_ => setState(old_state => ({ ...old_state, success: false })), 3000);
        return <h1>Forum created successfully!</h1>
    }

    return (
        <c.Root_Container>
            <c.Header>New Forum</c.Header>
            <c.Form spellcheck="false" onSubmit={handleSubmit}>
                <c.Input type="text" name="forum_name" placeholder="Forum Name" autocomplete="off" required onChange={handleChange} />
                <c.Text_Area name="forum_description" placeholder="Description" onChange={handleChange} ></c.Text_Area>
                <c.Button>Submit</c.Button>
                { showError() }
            </c.Form>
        </c.Root_Container>
    )
}