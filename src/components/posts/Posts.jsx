import React from 'react'
import classes from './posts.module.css'
import Post from "./Post";

let Posts = (props) => {

    let postsData = props.posts.map(item =><Post headline={item.headline} webUrl={item.webUrl}/>);
    return (


        <div className={classes.postsContainer}>
            <div className={classes.postsWrapper}>
                {postsData}
            </div>
        </div>


    )

};
export default Posts;