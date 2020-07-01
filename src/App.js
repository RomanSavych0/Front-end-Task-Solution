import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import PostsContainer from "./components/posts/PostsContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">

                <Navbar/>

                <div className="app-wrapper-content">
                <Route path ='/posts' render={ ()=><PostsContainer/> }/>
                </div>
            </div>

        </BrowserRouter>


    )
}

export default App;
