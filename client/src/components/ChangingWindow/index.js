import React from "react";
import { Switch, Route } from "react-router-dom";
import Component from "../Component";
import Forums from "../Forums";
import Posts from "../Posts";
import Users from "../Users";
import Dashboard from "../Dashboard";
import Individual_Forum from "../IndividualForum";
import E404 from "../E404";
import Register from "../Register";

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
                <Route path="/forums/:forum_name" exact component={Individual_Forum} />
                <Route path="/register" exact component={Register} />
                <Route path="*" component={E404}/>
            </Switch>
        )
    }
}