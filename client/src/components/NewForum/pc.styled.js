import styled from "styled-components";

const Root_Container = styled.div`
    width: 100%;
    height: 92vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.h1`
    font-weight: bold;
    margin-bottom: 15px;
`;

const Form = styled.form`
    width: 800px;
    height: 700px;
    background-color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
`;

const Text_Area = styled.textarea`
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
`;

const Button = styled.button`
    padding: 30px;
    background-color: white;
`;

export {
    Root_Container,
    Header,
    Form,
    Input,
    Text_Area,
    Button
}