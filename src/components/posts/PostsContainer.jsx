import React from 'react'
import Posts from "./Posts";
import {getPostsAPI} from "../../api/api";
import {connect} from "react-redux";
import {compose} from "redux";
import {getPosts} from "../../redux/reducers/postsReducer";
import Preloader from "../preloader/Preloader";

class PostsContainer extends React.Component {

    componentDidMount() {

        this.props.getPosts(2);

    }


    render() {
        { console.log(this.props.posts)}
        // return (<>
        //         {this.props.isFetching ? <Preloader/> : <Posts posts={this.props.posts}/>
        //         }
        //     </>
        // )
            return <Posts posts={this.props.posts}/>

    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        isFetching: state.postsPage.posts,
        pageNumber: state.postsPage.pageNumber
    }


};
export default compose(connect(mapStateToProps, {getPosts}))(PostsContainer)
