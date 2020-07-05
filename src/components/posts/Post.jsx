import React from 'react';
import classes from './posts.module.css';
import Paper from '@material-ui/core/Paper';

let Post = (props) => {
    return (
        <Paper className={classes.postItem}>
            <div className={classes.textWrapper}>
                <h3>
                    <a href={`${props.webUrl}`} className={classes.postText} target="_blank">{props.headline}</a>
                </h3>
            </div>
        </Paper>
    )
};

export default Post