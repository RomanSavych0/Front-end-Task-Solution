import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import PostsContainer from "./components/posts/PostsContainer";
import Login from "./components/login/Login";
import NavbarContainer from "./components/navbar/NavbarContainer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <NavbarContainer/>

                <div className="app-wrapper-content">
                    <Route path='/posts' render={() => <PostsContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>

        </BrowserRouter>


    )
}

export default App;
