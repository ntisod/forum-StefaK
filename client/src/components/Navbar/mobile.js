import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";

// Tagged template literal
const Navbar = styled.nav`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 2px solid black;
`;

const Menu_Button = styled.ul`
    width: 37px;
    height: 37px;
    border: 2px solid rgba(0,0,0,0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    list-style: none;
`;

const Line = styled.li`
    width: 30px;
    height: 3px;
    background-color: black;
`;

export default _ => {
    const [menu_state, setMenuState] = useState({menu_toggled: false });

    function toggleMenu() {
        console.log("Toggled");
        setMenuState({
            menu_toggled: !menu_state.menu_toggled
        });
    }

    return (
        <Navbar>
            <h1>Anonymous</h1>
            <Menu_Button onClick={toggleMenu}><Line /><Line /><Line /></Menu_Button>
            {menu_state.menu_toggled && <Menu />}
        </Navbar>
    )
}