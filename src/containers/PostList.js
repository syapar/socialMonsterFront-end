import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import * as actions from '../actions/postActions';
import { getVisiblePosts, getErrorMessage, getIsFetching, getIsSocialAccountsLoaded } from '../reducers';
import Error from '../components/Error';


class PostList extends Component{
    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        if(this.props.filter !== prevProps.filter){
            this.fetchData();
        }
    }

    fetchData(){
        const { filter, fetchPosts, isSocialAccountsLoaded } = this.props;

        if(isSocialAccountsLoaded){
            fetchPosts(filter);
        }
    }

    render(){
        const { posts, errorMessage, isFetching, isSocialAccountsLoaded} = this.props;
        if(!isSocialAccountsLoaded || (isFetching && !posts.length)){
            return <p>Loading...</p>
        }
        if(errorMessage && !posts.length){
            return (
                <Error
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            )
        }

        return (
            <div>
                {
                    posts.map((p) =>{
                        if(p.message){
                            return <p key={p.id}>
                                {p.message} <br/>
                                <Image src={p.picture}/>
                            </p>
                        }else if(p.text){
                            return <p key={p.id}>
                                {p.text} <br/>
                            </p>
                        }else{
                            return <p key={p.id}>
                                <Image src={p.images.standard_resolution.url}/>
                            </p>
                        }
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return{
        posts: getVisiblePosts(state, filter),
        errorMessage: getErrorMessage(state, filter),
        isFetching: getIsFetching(state, filter),
        filter,
        isSocialAccountsLoaded: getIsSocialAccountsLoaded(state),
    };
};

export const ConnectedPostList = connect(
    mapStateToProps,
    actions
)(PostList);

export default withRouter(ConnectedPostList);