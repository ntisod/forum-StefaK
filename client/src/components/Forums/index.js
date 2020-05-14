import React from "react";
import Component from "../Component";
import { getAllForums } from "../../services/forumService";
import Forums_PC from "./pc";
import Forums_Mobile from "./mobile";

export default class Forums extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.state.is_mobile ? <Forums_Mobile /> : <Forums_PC />}
            </>
        )
    }
}