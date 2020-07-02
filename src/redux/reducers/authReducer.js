import {createAccountAPI, signInWithGoogleAPI, signInWithUserAccountAPI, singOuthAPI} from "../../api/api";
import {toast} from "react-toastify";

const SING_IN_WITH_GOOGLE = 'SIGN-IN-WITH-GOOGLE';
const SING_IN_WITH_USER_ACCOUNT = 'SIGN-IN-WITH-USER-ACCOUNT';
const SING_OUT = 'SIGN-OUT';
let initialState = {
    email: '',
    hasAccount: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SING_IN_WITH_GOOGLE:
            return {...state, email: action.email, hasAccount: true};
        case SING_IN_WITH_USER_ACCOUNT:
            return {...state, email: action.email, hasAccount: true};
        case SING_OUT:
            return {...state, hasAccount: false};
        default:
            return state
    }

};

export const singInWithUserAccountAC = (email) => {
    return ({type: SING_IN_WITH_USER_ACCOUNT, email})


};
export const singOutAC = () => {
    return ({type: SING_OUT})
};
export const signInWithGoogleAC = (email) => {
    return ({type: SING_IN_WITH_GOOGLE, email})

};

export const singInWithUserAccount = (email, password) => (dispatch) => {
    signInWithUserAccountAPI(email, password).then(response => {
        dispatch(singInWithUserAccountAC(response.user.email));
    }).catch(error => toast.error(error.toString()))
};
export const signInWithGoogle = () => (dispatch) => {

    signInWithGoogleAPI().then(response => {
        dispatch(signInWithGoogleAC(response.user.email))
    }).catch(error => toast.error(error.toString()))
};
export const signOut = () => (dispatch) => {
    singOuthAPI();
    dispatch(singOutAC());
};

export default authReducer;