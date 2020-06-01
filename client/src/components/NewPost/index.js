import React from 'react';
import Component from "../Component";
import NP_PC from "./pc";
import { Redirect } from 'react-router-dom';

export default class NewPost extends Component {
    constructor(props) {
        super(props);
    }

    // data = forum_name and forum_description
    async createPost(data) {
        
    }

    render() {
        // If the user is not logged in, redirect them to the login page
        if (!this.props.isLoggedIn())
            return <Redirect to="/login" />

        return (
            <>
                {!this.state.is_mobile && <NP_PC {...this.props} />}
                {this.state.is_mobile && <h1>MOBILE</h1>}
            </>
        );
    }
}