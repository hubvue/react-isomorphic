import {
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_REQUEST
} from "./action";

const newsReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_NEWS_SUCCESS : 
            return action.data;
        default : {
            return state;
        }
    }
}

export default newsReducer; 