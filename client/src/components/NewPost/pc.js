import * as c from "./pc.styled";
import React, { useState } from "react";

export default function() {
    
    const [state, setState] = useState({
        title: "",
        content: "",
        forum_name: "",
        error: ""
    });

    function handleChange(event) {
        // Directly referencing to event.target.value throws an error
        // probably because setState is an async function
        let value = event.target.value;

        let event_name = event.target.getAttribute("name");
        if (event_name === "title")
            setState(old_state => ({ ...old_state, title: value }));
        if (event_name === "content")
            setState(old_state => ({ ...old_state, content: value }));
        if (event_name === "forum_name")
            setState(old_state => ({ ...old_state, forum_name: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
    }

    function showError() {
        if (state.error.length > 0)
            return <p>{state.error}</p>
        else return <p>.</p>
    }

    return (
        <c.Root_Container>
            <c.Header>New Post</c.Header>
            <c.Form spellcheck="false" onSubmit={handleSubmit}>
                <label for="choose_forum_in_select">Choose Forum</label>
                <c.Select id="choose_forum_in_select" name="forum_name" onChange={handleChange} required></c.Select>
                <c.Input type="text" name="title" placeholder="Title" autocomplete="off" required onChange={handleChange} />
                <c.Text_Area name="content" placeholder="Content" onChange={handleChange} ></c.Text_Area>
                <c.Button>Submit</c.Button>
                { showError() }
            </c.Form>
        </c.Root_Container>
    )
}