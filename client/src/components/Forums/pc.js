import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Styled_Link = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    h1 {
        margin-right: 20px;
    }

    border: 1px solid black;
`;

const Forum = forum_data => {
    return (
        <Styled_Link to={`/forums/${forum_data.forum_id}`}>
            <h1>{forum_data.forum_name}</h1>
            <h1>{forum_data.description}</h1>
            <h1>Members: {forum_data.amount_of_members || 0}</h1>
        </Styled_Link>
    )
}

const Forums_Container = styled.div`
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    flex-direction: column;
`;

export default props => {
    if(props.data.error) {
        return (
            <div>
                <h1>{props.data.error}</h1>
            </div>
        )
    } else 
    { 
        return (
            <Forums_Container>
                {props.data.forums.map(forum_data => Forum(forum_data))}
            </Forums_Container>
        );
    }
}