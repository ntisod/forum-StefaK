import React, { useEffect, useState } from "react";
import * as c from "./pc.styled";

const renderAuthButtons = _ => {
    return <>
                <c.Styled_Link to="/login"><c.Username_Container_Button>Login</c.Username_Container_Button></c.Styled_Link>
                <c.Styled_Link to="/register"><c.Username_Container_Button>Register</c.Username_Container_Button></c.Styled_Link>
    </>
}

const showAdminMenu = _ => (
    <c.Admin_Menu>
        <c.Styled_Link to="/forums/new"> <c.Admin_Menu_Button>Create Forum</c.Admin_Menu_Button> </c.Styled_Link>
        <c.Styled_Link to="/posts/new"> <c.Admin_Menu_Button>Create Post</c.Admin_Menu_Button> </c.Styled_Link>
    </c.Admin_Menu>
);

const renderMyStuffButton = _ => {
    // Because the height variable is undefined at first, I think, it doesn't console.log anything
    // setTimeout because the menu element is not yet initialized if running without setTimeout
    setTimeout(_ => toggleMenu(), 0);

    return <>
        <c.My_Stuff_Button onClick={toggleMenu}>My stuff</c.My_Stuff_Button>
        <c.My_Stuff_Menu id="stuff_menu">
            <c.Upper_Container>
                <c.Forums_Button>My Forums</c.Forums_Button>
                <c.Posts_Button>My Posts</c.Posts_Button>                
            </c.Upper_Container>

            <c.Comments_Button>My Comments</c.Comments_Button>
        </c.My_Stuff_Menu>
    </>
};

const toggleMenu = _ => {
    let menu = document.getElementById("stuff_menu");
    console.log(menu.style.height)
    menu.style.height = menu.style.height === "0px" ? "250px" : "0px";
}

export default props => {
    return (
        <c.Navbar>
            <c.Username_Container>
                <c.Username>{ props.isLoggedIn() ? localStorage.getItem("username") : "Anonymous" }</c.Username>
                { !props.isLoggedIn() && renderAuthButtons() }
                { props.isLoggedIn() && renderMyStuffButton() }
            </c.Username_Container>

            { props.isLoggedIn() && showAdminMenu() }

            <c.Menu>
                <c.Styled_Link to="/"><c.Menu_Button>Home</c.Menu_Button></c.Styled_Link>
                <c.Styled_Link to="/forums"><c.Menu_Button>Forums</c.Menu_Button></c.Styled_Link>
                <c.Styled_Link to="/posts"><c.Menu_Button>Posts</c.Menu_Button></c.Styled_Link>
                <c.Styled_Link to="/users"><c.Menu_Button>Users</c.Menu_Button></c.Styled_Link>
            </c.Menu>
        </c.Navbar>
    )
}