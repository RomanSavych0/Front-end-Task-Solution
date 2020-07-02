import * as firebase from "firebase";
import {toast} from "react-toastify";

export let getPostsAPI = (page) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200101&end_date=20200102&facet=true&facet_fields=day_of_week&facet" +
        "filter=false&page=${page}&api-key=SaGOhDvuEsmE9hpMo07piX2XXbJMoz5A`;
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    };
    return fetch(url, options)
};

export let createAccountAPI = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {

        toast.success('registration was successful, now you can log in!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    })
        .catch(error => toast.error(error.toString()));

};
export let signInWithUserAccountAPI = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};
export let signInWithGoogleAPI = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleAuthProvider)
};
export let singOuthAPI = () => {
    firebase.auth().signOut();
};
