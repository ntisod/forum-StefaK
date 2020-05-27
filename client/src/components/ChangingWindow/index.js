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
import Login from "../Login";

export default class Changing_Window extends Component {
    constructor(props) {
        super(props);
    }

    passSomePropsToComponent(component) {
        return <Component isLoggedIn={this.props.isLoggedIn} setLoggedIn={this.props.setLoggedIn}/>
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact                       component={_ => <Dashboard {...this.props} />}/>
                <Route path="/forums" exact                 component={_ => <Forums {...this.props} />}/>
                <Route path="/posts" exact                  component={_ => <Posts {...this.props} />}/>
                <Route path="/users" exact                  component={_ => <Users {...this.props} />}/>
                <Route path="/forums/:forum_name" exact     component={_ => <Individual_Forum {...this.props} />} />
                <Route path="/register" exact               component={_ => <Register {...this.props} />} />
                <Route path="/login" exact                  component={_ => <Login {...this.props} />} />
                <Route path="*"                             component={E404}/>
            </Switch>
        )
    }
}