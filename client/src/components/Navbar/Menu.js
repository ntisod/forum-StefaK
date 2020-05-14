import React from "react";
import styled from "styled-components";

const Menu = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: red;
`;
export default _ => {
    return (
        <Menu />
    );
}