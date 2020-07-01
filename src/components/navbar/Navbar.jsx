import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export let Navbar = (props) => {
    return (<div className={classes.navbarWrapper}>
            <div className={classes.navbarItem}>
                <span>
                     <NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink>
                    </span>
            </div>
            <div className={classes.navbarItem}>
                <span>
                <NavLink to="/login" activeClassName={classes.active}>Login</NavLink>
                    </span>
            </div>


        </div>
    )


};
export default Navbar;
