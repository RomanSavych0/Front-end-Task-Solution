import React from 'react'
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {signOut} from "../../redux/reducers/authReducer";

class NavbarContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.isAuth);
    }

    render() {

        return (
            <Navbar isAuth={this.props.isAuth} email={this.props.email} signOut={this.props.signOut}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.hasAccount,
        email: state.loginPage.email
    }
};
export default connect(mapStateToProps, {signOut})(NavbarContainer);
