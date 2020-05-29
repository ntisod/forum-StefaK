import styled from "styled-components";
import  { Link } from "react-router-dom";

const Navbar = styled.nav`
    width: 100%;
    height: 8vh;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    transition: 0.25s;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: #ebebeb;
    }
    color: white;
`;

const Username_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Username = styled.h1`
    font-weight: bold;
    margin-left: 10px;
    color: white;
`;

const Username_Container_Button = styled.button`
    margin-left: 15px;
    padding: 15px;
    background: white;
    border: 0;
    transition: 0.25s;
    &:hover {
        background: gray;
        cursor: pointer;
    }
`;

export {
    Navbar,
    Menu,
    Styled_Link,
    Menu_Button,
    Username_Container,
    Username,
    Username_Container_Button
}