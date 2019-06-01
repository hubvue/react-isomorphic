import {createStore,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import newReducer from "../components/NewsList/reducer";

const rootReducer = combineReducers({
    news: newReducer,
})


const configurStore = (initialData) => {
    return createStore(rootReducer,initialData,applyMiddleware(thunk));
}

export default configurStore;