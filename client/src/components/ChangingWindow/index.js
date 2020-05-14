import React from "react";
import { Switch, Route } from "react-router-dom";
import Component from "../Component";
import Forums from "../Forums";
import Posts from "../Posts";
import Users from "../Users";
import Dashboard from "../Dashboard";

export default class Changing_Window extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/forums" exact component={Forums}/>
                <Route path="/posts" exact component={Posts}/>
                <Route path="/users" exact component={Users}/>
            </Switch>
        )
    }
}