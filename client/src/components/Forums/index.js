import React from "react";
import Component from "../Component";
import { getAllForums } from "../../services/forumService";
import Forums_PC from "./pc";
import Forums_Mobile from "./mobile";
import Loader from "../Loader";

export default class Forums extends Component {
    constructor(props) {
        super(props);
        this.state.data_is_fetched = false;
        this.state.fetched_data = {
            forums: []
        }
    }

    async componentDidMount() {
        let data = await getAllForums();
        this.setState(old_state => ({
            ...old_state,
            fetched_data: data,
            data_is_fetched: !old_state.data_is_fetched
        }));
    }

    render() {
        return (
            <>
                {(this.state.is_mobile && this.state.data_is_fetched) && <Forums_Mobile data={this.state.fetched_data}/>}
                {(!this.state.is_mobile && this.state.data_is_fetched) && <Forums_PC data={this.state.fetched_data}/>}
                {!this.state.data_is_fetched && <Loader />}
            </>
        )
    }
}