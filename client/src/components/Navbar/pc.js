import React from "react";
import styled from "styled-components";
import  { Link } from "react-router-dom";
const Navbar = styled.nav`
    width: 100%;
    height: 8vh;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid black;
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`;

const Styled_Link = styled(Link)`
    color: black;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Menu_Button = styled.li`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    border: 2px solid rgba(0,0,0,0);
    &:hover {
        border: 2px solid rgba(0,0,0,1);
        cursor: pointer;
    }
`;

export default _ => {
    return (
        <Navbar>
            <h1>Anonymous</h1>
            <Menu>
                <Styled_Link to="/"><Menu_Button>Home</Menu_Button></Styled_Link>
                <Styled_Link to="/forums"><Menu_Button>Forums</Menu_Button></Styled_Link>
                <Styled_Link to="/posts"><Menu_Button>Posts</Menu_Button></Styled_Link>
                <Styled_Link to="/users"><Menu_Button>Users</Menu_Button></Styled_Link>
            </Menu>
        </Navbar>
    )
}