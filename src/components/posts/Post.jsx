import React from 'react';
import classes from './posts.module.css'

let Post = (props) => {
    console.log(props.webUrl);
    return (
        <div className={classes.postItem}>
            <h3>
                <a href={`${props.webUrl}`} className={classes.postText}>{props.headline}</a>
            </h3>
        </div>
    )
};

export default Post