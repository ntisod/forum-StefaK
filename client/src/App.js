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
  }

  render() {
    return ( 
      <Router>
        <Global_Style />
        <Navbar></Navbar>
        <ChangingWindow />
      </Router>
    );
  }
}