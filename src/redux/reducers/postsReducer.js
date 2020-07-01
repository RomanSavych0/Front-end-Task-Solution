import {getPostsAPI} from "../../api/api";

const SET_POSTS = 'SET-POSTS';
const TOGGLE_IS_FETCING = 'TOGGLE-IS-FETCHING';
let initialState = {

    posts: [],
    pageNumber :1,
    isFetching: false

};
 const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: state.posts.concat(action.posts)};
        case TOGGLE_IS_FETCING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
    }
};
export const setPostsAC = (page , posts) => {
    return {type: SET_POSTS, posts}
};
export const toggleIsFetchingAC = (isFetching)=>{
return {type: TOGGLE_IS_FETCING , isFetching}

};
export const getPosts = (page = 1)=>
    (dispatch)=>{
    dispatch(toggleIsFetchingAC(true));
        getPostsAPI(page).then(
            response => {
                if (response.ok) {
                    dispatch(toggleIsFetchingAC(false));
                    return response.text();
                }
                return response.text().then(err => {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText,
                        errorMessage: err,
                    });
                });
            })
            .then(data => {
                let dataJson = JSON.parse(data);
                let dataArray = dataJson.response.docs;
                let newArray = dataArray.map(i => {
                    return {
                        headline: i.abstract,
                        webUrl: i.web_url
                    }
                });
                dispatch(setPostsAC(page , newArray));
            })
            .catch(err => {
                console.error(err);
            });
};
export default postsReducer;