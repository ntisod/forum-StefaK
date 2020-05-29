import styled from "styled-components";

const Root_Container = styled.div`
    width: 100%;
    height: 92vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Register_Container = styled.div`
    width: 500px;
    height: 350px;
    background-color: white;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Register_Header = styled.h1`
    margin-top: 10px;
`;

const Register_Form = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > * {
        margin-bottom: 15px;
        margin-top: 15px;
    }
`;

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid black;
    padding: 3px;
    transition: 0.25s;
    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
        width: 90%;
    }
`;

const Submit_Button = styled.button`
    padding: 15px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
`;

export {
    Root_Container,
    Register_Container,
    Register_Form,
    Register_Header,
    Input,
    Submit_Button
}