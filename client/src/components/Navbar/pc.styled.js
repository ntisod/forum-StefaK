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

const Admin_Menu = styled.div`
    padding: 30px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Admin_Menu_Button = styled.div`
    padding: 10px;
    background-color: white;
    margin-right: 10px;
    margin-left: 10px;
    &:hover {
        cursor: pointer;
        background: gray;
    }
`;

const My_Stuff_Button = styled.div`
    padding: 10px;
    background-color: white;
    margin-right: 10px;
    margin-left: 10px;
    &:hover {
        cursor: pointer;
        background: gray;
    }
`;

const My_Stuff_Menu = styled.div`
    position: fixed;
    left: 0;
    top: 8vh;
    width: 250px;
    height: 0px;
    background-color: white;
    transition: 0.25s;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Forums_Button = styled.h1`
    padding: 40px;
    width: 100px;
    height: 50px;
    background-color: black;
    color: white;
    margin: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Posts_Button = styled.h1`
    padding: 40px;
    width: 100px;
    height: 50px;
    background-color: red;
    color: white;
    margin: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Comments_Button = styled.h1`
    padding: 40px;
    width: 200px;
    height: 50px;
    background-color: orange;
    margin: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Upper_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    Navbar,
    Menu,
    Styled_Link,
    Menu_Button,
    Username_Container,
    Username,
    Username_Container_Button,
    Admin_Menu,
    Admin_Menu_Button,
    My_Stuff_Button,
    My_Stuff_Menu,
    Forums_Button,
    Posts_Button,
    Comments_Button,
    Upper_Container
}