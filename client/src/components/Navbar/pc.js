import React, { useEffect, useState } from "react";
import * as c from "./pc.styled";

const renderAuthButtons = _ => {
    return <>
                <c.Styled_Link to="/login"><c.Username_Container_Button>Login</c.Username_Container_Button></c.Styled_Link>
                <c.Styled_Link to="/register"><c.Username_Container_Button>Register</c.Username_Container_Button></c.Styled_Link>
    </>
}

export default props => {
    return (
        <c.Navbar>
            <c.Username_Container>
                <c.Username>Anonymous</c.Username>
                { !props.isLoggedIn() && renderAuthButtons() }
            </c.Username_Container>

            <c.Menu>
                <c.Styled_Link to="/"><c.Menu_Button>Home</c.Menu_Button></c.Styled_Link>
                <c.Styled_Link to="/forums"><c.Menu_Button>Forums</c.Menu_Button></c.Styled_Link>
                <c.Styled_Link to="/posts"><c.Menu_Button>Posts</c.Menu_Button></c.Styled_Link>
                <c.Styled_Link to="/users"><c.Menu_Button>Users</c.Menu_Button></c.Styled_Link>
            </c.Menu>
        </c.Navbar>
    )
}