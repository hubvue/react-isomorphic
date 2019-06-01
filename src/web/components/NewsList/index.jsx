import React, { Component } from "react";
import News from "../New";
import {fetchNews} from "./action";
class NewsList extends Component {
    constructor(props) {
        super(props);
    }
    static initialAction() {
        return fetchNews()
    }
    componentDidMount() {
        if (this.props.news.length === 0) {
            this.props.dispatch(NewsList.initialAction())
        }
    }
    render() {
        const { news } = this.props;
        return (
            <ul>
                {news.map(news =>
                    <News key={news.id} {...news} />
                )}
            </ul>
        )
    }
}
export default NewsList;