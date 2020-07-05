import React from 'react';
import {NavLink} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export let Navbar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/posts" style={{color: "white", textDecoration: 'none'}}>Posts</NavLink>
                    </Typography>
                    <Button>
                        <NavLink to="/login" style={{color: "white"}}>
                            {props.isAuth ?
                                (<span>
                                {props.email}
                            </span>
                                )
                                :
                                (<span>Login</span>
                                )
                            }
                        </NavLink>
                    </Button>
                    {props.isAuth ? (
                        <Button onClick={props.signOut}>
                            Sign out
                        </Button>
                        ) :
                        (
                        <div></div>
                        )
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};


export default Navbar;
