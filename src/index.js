import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/Store";
import * as firebase from 'firebase';

const firebaseConfing = {
    apiKey: "AIzaSyBf6qU3K3ah0fBLlCqYFZwrggc03w4Stl8",
    authDomain: "nytimesreact.firebaseapp.com",
    databaseURL: "https://nytimesreact.firebaseio.com",
    projectId: "nytimesreact",
    storageBucket: "nytimesreact.appspot.com",
    messagingSenderId: "808979756337",
    appId: "1:808979756337:web:cc90442be7cd1582dfac10",
    measurementId: "G-5NNN3DF867"
};
firebase.initializeApp(firebaseConfing);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
