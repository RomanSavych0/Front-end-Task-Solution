import {createAccountAPI, signInWithGoogleAPI, signInWithUserAccountAPI, singOuthAPI} from "../../api/api";
import {toast} from "react-toastify";

const SIGN_IN_WITH_GOOGLE = 'SIGN-IN-WITH-GOOGLE';
const SIGN_IN_WITH_USER_ACCOUNT = 'SIGN-IN-WITH-USER-ACCOUNT';
const SIGN_OUT = 'SIGN-OUT';
let initialState = {
    email: '',
    hasAccount: false,
    password: ''
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SIGN_IN_WITH_GOOGLE:
            return {...state, email: action.email, hasAccount: true};
        case SIGN_IN_WITH_USER_ACCOUNT:
            return {...state, email: action.email, password: action.password, hasAccount: true};
        case SIGN_OUT:
            return {...state, hasAccount: false};
        default:
            return state
    }

};

export const signInWithUserAccountAC = (email, password) => {
    return ({type: SIGN_IN_WITH_USER_ACCOUNT, email, password})


};
export const signOutAC = () => {
    return ({type: SIGN_OUT})
};
export const signInWithGoogleAC = (email) => {
    return ({type: SIGN_IN_WITH_GOOGLE, email})

};

export const signInWithUserAccount = (email, password) => (dispatch) => {
    signInWithUserAccountAPI(email, password).then(response => {
        dispatch(signInWithUserAccountAC(response.user.email, password));
    }).catch(error => toast.error(error.toString()))


};
export const signInWithGoogle = () => (dispatch) => {

    signInWithGoogleAPI().then(response => {
        dispatch(signInWithGoogleAC(response.user.email))
    }).catch(error => toast.error(error.toString()))
};
export const signOut = () => (dispatch) => {
    singOuthAPI();
    dispatch(signOutAC());
};

export default authReducer;