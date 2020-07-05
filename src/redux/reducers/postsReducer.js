import {getPostsAPI} from "../../api/api";

const SET_POSTS = 'SET-POSTS';
const SET_PAGE = 'SET-PAGE';
let initialState = {

    posts: [],
    pageNumber: 1,

};
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: state.posts.concat(action.posts)};
        case SET_PAGE:
            return {...state, pageNumber: action.pageNumber};
        default:
            return state;
    }
};
export const setPostsAC = (page, posts) => {
    return {type: SET_POSTS, posts}
};

export const getPosts = (page = 1) =>
    (dispatch) => {
        getPostsAPI(page).then(
            response => {
                if (response.ok) {
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
                        headline: i.headline.main,
                        webUrl: i.web_url
                    }
                });
                dispatch(setPostsAC(page, newArray));
            })
            .catch(err => {
                console.error(err);
            });
    };
export const setPage = (page) => (dispatch) => {
    dispatch(setPageAC(page));
};
export const setPageAC = (pageNumber) => {
    return {type: SET_PAGE, pageNumber}
};

export default postsReducer;