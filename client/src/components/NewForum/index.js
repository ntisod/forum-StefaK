import React from 'react';
import Component from "../Component";
import NF_PC from "./pc";
import { Redirect } from 'react-router-dom';
import { createForum } from "../../services/forumService";

export default class NewForum extends Component {
    constructor(props) {
        super(props);
    }

    // data = forum_name and forum_description
    async createForum(data) {
        let response = await createForum(data);
        return response;
    }

    render() {
        // If the user is not logged in, redirect them to the login page
        if (!this.props.isLoggedIn())
            return <Redirect to="/login" />

        return (
            <>
                {!this.state.is_mobile && <NF_PC {...this.props} createForum={this.createForum}/>}
                {this.state.is_mobile && <h1>MOBILE</h1>}
            </>
        );
    }
}