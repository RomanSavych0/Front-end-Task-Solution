import React from 'react';
import Posts from './Posts';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getPosts, setPage} from '../../redux/reducers/postsReducer';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

class PostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts(2);
    }

    loadMorePosts = () => {
        this.props.setPage(this.props.pageNumber + 1);
        console.log(this.props.pageNumber);
        this.props.getPosts(this.props.pageNumber);
    };

    render() {

        return (<div>
                {this.props.isAuth ? (<div>
                        <Posts posts={this.props.posts}/>
                        <div className="buttonWrapper" style={ButtonWrapper}>
                            <Button onClick={this.loadMorePosts} variant="contained" color="primary">
                                Load More
                            </Button>
                        </div>
                    </div>) :
                    (
                        <div style={{color: "white"}}>
                            You are not logged, please go to the <NavLink to="/login" style={{color: "blue"}}>
                            Login Page
                        </NavLink>
                            and login or register and try again
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        isFetching: state.postsPage.posts,
        pageNumber: state.postsPage.pageNumber,
        isAuth: state.loginPage.hasAccount,

    }


};
export default compose(connect(mapStateToProps, {getPosts, setPage}))(PostsContainer)
