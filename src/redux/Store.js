import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk"
import postsReducer from "./reducers/postsReducer";
let reducers = combineReducers(
    {
        postsPage : postsReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
