import React from 'react';
import classes from './posts.module.css';
import Post from "./Post";
import Paper from '@material-ui/core/Paper';

let Posts = (props) => {
    let postsData = props.posts.map(item => <Post headline={item.headline} webUrl={item.webUrl}/>);
    return (
        <Paper elevation={2} className={classes.postsContainer}>
            <div className={classes.postsWrapper}>
                {postsData}
            </div>
        </Paper>
    )
};
export default Posts;