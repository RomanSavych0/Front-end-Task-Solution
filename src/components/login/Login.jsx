import React from 'react';
import {connect} from 'react-redux';
import {signInWithGoogle, signInWithUserAccount} from '../../redux/reducers/authReducer';
import {compose} from 'redux';
import classes from './Login.module.css'
import {createAccountAPI} from '../../api/api';
import {NavLink} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false,
            rememberMe: false
        }

    }


    handleChange = ({target: {value, id}}) => {
        this.setState({[id]: value});
    };
    setLocalStorage = (rememberMe, email, password) => {
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('email', rememberMe ? email : '');
        localStorage.setItem('password', rememberMe ? password : '');
    };

    signIn = () => {
        const {email, password, rememberMe} = this.state;
        this.setLocalStorage(rememberMe, email, password);
        this.props.signInWithUserAccount(email, password);
        this.setState({hasAccount: this.props.hasAccount})
    };
    signUp = () => {
        const {email, password} = this.state;
        createAccountAPI(email, password);
    };


    componentDidMount() {
        console.log(localStorage.getItem('rememberMe'));
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const email = rememberMe ? localStorage.getItem('email') : '';
        const password = rememberMe ? localStorage.getItem('password') : '';
        this.setState({email, password, rememberMe});
    }

    render() {
        const hasAccount = this.props.hasAccount;
        return (<div className={classes.loginContent}>
            {hasAccount ? (
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
                                   value={this.state.email}
                            />
                            <Input defaultValue="" inputProps={{'aria-label': 'description'}}
                                   placeholder="password"
                                   type="password"
                                   id="password"
                                   className={classes.passwordInput}
                                   value={this.state.password}
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
                                <label>
                                    <input id="rememberMe" name="rememberMe" checked={this.state.rememberMe}
                                           onChange={this.handleChange}
                                           type="checkbox"/> Remember me
                                </label>
                                <div className={classes.googleBtn} onClick={this.props.signInWithGoogle}>
                                    <div className={classes.googleIconWrapper}>
                                        <img className={classes.googleIcon}
                                             src="https://upload.wikimedia.org/wikipedia/
                                             commons/5/53/Google_%22G%22_Logo.svg"/>
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
        password: state.loginPage.password,
        hasAccount: state.loginPage.hasAccount,
    }
};
export default compose(connect(mapStateToProps, {signInWithUserAccount, signInWithGoogle}))(Login)