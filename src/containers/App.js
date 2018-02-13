import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Home from '../components/Home';
import Auth from './Auth';
import MyAccount from './MyAccount';
import { Route,withRouter } from 'react-router-dom';
import Register from '../components/Register';
import * as PageTypes from '../constants/PageTypes';
import { getIsSignedIn, getIsSignedInRequested } from '../reducers';



class App extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {isSignedIn, isSignedInRequested, location } = this.props;
        let mainContent;

        if(!isSignedIn){
            if(isSignedInRequested){
               return <div> Loading....</div>;
            }else{
                if(location.pathname === `/${PageTypes.REGISTER}`){
                    return <Route component={Register} />;
                }else{
                    return <Route component={Auth} />;
                }
            }
        }

        return(
            <div>
                <Header/>
                <switch>
                    <Route exact path='/' component={Home} />
                    <Route path={`/${PageTypes.HOME}/:filter?`} component={Home} />
                    <Route path={`/${PageTypes.MY_ACCOUNT}`} component={MyAccount} />
                </switch>
            </div>
        );
    }
}

const mapStateToProps =  (state) => ({
    isSignedIn:getIsSignedIn(state),
    isSignedInRequested:getIsSignedInRequested(state)
});

App = connect(
    mapStateToProps,
    null
)(App);


export default withRouter(App);
