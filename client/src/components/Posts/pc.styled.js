import styled from "styled-components";

const Root_Container = styled.div`
    width: 100%;
    height: 92vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Posts_Heading = styled.h1`
    font-weight: bold;
`;

const Post_Container = styled.div`
    padding: 30px;
    border: 1px solid black;
    margin-bottom: 30px;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 3px #000;
    }

`;

const Post_Title = styled.h1`
    font-size: 24px;
`;

const Post_Info = styled.ul`
    list-style: none;
`;

const Post_Info_Row = styled.li`

`;

const Post_Lower_Container = styled.div`

`;

export {
    Root_Container,
    Posts_Heading,
    Post_Title,
    Post_Info,
    Post_Lower_Container,
    Post_Info_Row,
    Post_Container
}