import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Component from "./components/Component";
import Navbar from "./components/Navbar";
import { createGlobalStyle } from "styled-components";
import ChangingWindow from "./components/ChangingWindow";

const Global_Style = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: false
    }

    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  // Tells all components that the user is logged in and refreshes them
  setLoggedIn(is_logged_in) {
    this.setState(old_state => ({
      ...old_state,
      logged_in: is_logged_in
    }))
  }

  // Checks whether the user is logged in
  isLoggedIn() {
    return this.state.logged_in
  }

  render() {
    return ( 
      <Router>
        <Global_Style />
        <Navbar setLoggedIn={this.setLoggedIn} isLoggedIn={this.isLoggedIn}/>
        <ChangingWindow setLoggedIn={this.setLoggedIn} isLoggedIn={this.isLoggedIn}/>
      </Router>
    );
  }
}