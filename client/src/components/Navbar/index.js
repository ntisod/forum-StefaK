import React from "react";
import Component from "../Component";
import Mobile_navbar from "./mobile";
import Pc_navbar from "./pc";
import styled from "styled-components";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.state.is_mobile ?    <Mobile_navbar isLoggedIn = {this.props.isLoggedIn}/> : 
                                            <Pc_navbar isLoggedIn = {this.props.isLoggedIn}/>} 
            </div>
        )
    }
}