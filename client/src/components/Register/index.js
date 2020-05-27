import React from 'react';
import Component from "../Component";
import Register_PC from "./pc";
import Register_Mobile from "./mobile";
import {register} from "../../services/authService";

export default class Register extends Component {
    constructor(props) {
        super(props);
    }

    async register(data) {
        let response = await register(data);
        return response;
    }

    render() {
        // If the user is logged in, redirect them to the dashboard page
        if (this.props.isLoggedIn())
            return <Redirect to="/" />

        return <>
            {!this.state.is_mobile && <Register_PC {...this.props} register={this.register}/>}
            {this.state.is_mobile && <Register_Mobile {...this.props} register={this.register}/>}
        </>
    }
}