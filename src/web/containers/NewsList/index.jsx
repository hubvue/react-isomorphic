import { connect } from "react-redux";
import NewsList from "../../components/NewsList";

const mapStateToProps = (state, props) => {
    return {
        news: state.news
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch,
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewsList);