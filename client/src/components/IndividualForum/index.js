import React from "react";
import Component from "../Component";
import { getForum, getForumPosts } from "../../services/forumService";
import Loader from "../Loader";
import individualForumPC from "./pc";

export default class Individual_Forum extends Component {
    constructor(props) {
        super(props);

        this.state.data_is_fetched = false;
        this.state.fetched_data = {}
    }

    async componentDidMount() {
        console.log(this)
        let data = await getForum(this.props.match.params.forum_name);
        data.posts = await getForumPosts(this.props.match.params.forum_name);

        this.setState(old_state => ({
            ...old_state,
            fetched_data: data,
            data_is_fetched: !old_state.data_is_fetched
        }));
    }

    render() {
        return (
            <>
                {!this.state.data_is_fetched && <Loader />}
                {this.state.data_is_fetched && !this.state.is_mobile && individualForumPC(this.state.fetched_data)}
            </>
        )
    }
}