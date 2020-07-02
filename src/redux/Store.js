import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk"
import postsReducer from "./reducers/postsReducer";
import authReducer from "./reducers/authReducer";
let reducers = combineReducers(
    {
        postsPage: postsReducer,
        loginPage: authReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
