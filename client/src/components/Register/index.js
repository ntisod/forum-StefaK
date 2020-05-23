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
        let reponse = await register(data);
    }

    render() {
        return <>
            {!this.state.is_mobile && <Register_PC register={this.register}/>}
            {this.state.is_mobile && <Register_Mobile />}
        </>
    }
}