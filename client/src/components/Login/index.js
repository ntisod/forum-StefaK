import React from 'react';
import Component from "../Component";
import { login } from  "../../services/authService";
import Login_PC from "./pc";
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    async login(data) {
        let response = await login(data);
        return response;
    }

    render() {
        // If the user is logged in, redirect them to the dashboard page
        if (this.props.isLoggedIn())
            return <Redirect to="/" />

        return (
            <>
                {!this.state.is_mobile && <Login_PC {...this.props} login={this.login}/>}
                {this.state.is_mobile && <h1>MOBILE</h1>}
            </>
        );
    }
}