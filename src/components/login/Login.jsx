import React from 'react';
import {connect} from "react-redux";
import {signInWithGoogle, singInWithUserAccount} from "../../redux/reducers/authReducer";
import {compose} from "redux";
import classes from './Login.module.css'
import {createAccountAPI} from "../../api/api";
import {NavLink} from "react-router-dom";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false
        }

    }

    handleChange = ({target: {value, id}}) => {
        this.setState({[id]: value});

    };
    signIn = () => {
        const {email, password} = this.state;
        this.props.singInWithUserAccount(email, password);
        this.setState({hasAccount: this.props.hasAccount})
    };
    signUp = () => {
        const {email, password} = this.state;
        createAccountAPI(email, password);

    };


    componentDidMount() {
        console.log(this.props.email);
        this.setState({email: this.props.email})
    }

    render() {
        const hasAccount = this.props.hasAccount;
        return (<div className={classes.loginContent}>
            {
                hasAccount ? (
                        <div className={classes.userAreLoggedText}><h1>You are logged
                            <br/>
                            now you can view <NavLink to="/posts" style={{color: "blue"}}>
                                Posts
                            </NavLink>
                        </h1>
                        </div>
                    ) :
                    (<div className={classes.loginBlock}>

                            <Input defaultValue="" inputProps={{'aria-label': 'description'}}
                                   placeholder="email"
                                   className={classes.emailInput}
                                   onChange={this.handleChange}
                                   id="email"
                            />

                            <Input defaultValue="" inputProps={{'aria-label': 'description'}}
                                   placeholder="password"
                                   type="password"
                                   id="password"
                                   className={classes.passwordInput}
                                   onChange={this.handleChange}
                            />


                            <div className={classes.buttons}>
                                <Button type="submit" onClick={this.signIn} value="sing in"
                                        variant="contained" color="primary">
                                    Sign in
                                </Button>
                                <Button type="submit" variant="contained" color="secondary" onClick={this.signUp}
                                        style={{marginLeft: "6px"}}>
                                    Sign up
                                </Button>

                                <div className={classes.googleBtn} onClick={this.props.signInWithGoogle}>
                                    <div className={classes.googleIconWrapper}>
                                        <img className={classes.googleIcon}
                                             src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                    </div>
                                    <p className={classes.btnText}><b>Sign in with google</b></p>
                                </div>
                            </div>


                        </div>

                    )
            }

        </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        email: state.loginPage.email,
        hasAccount: state.loginPage.hasAccount,
    }
};
export default compose(connect(mapStateToProps, {singInWithUserAccount, signInWithGoogle}))(Login)