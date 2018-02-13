import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Glyphicon} from 'react-bootstrap';
import qs from 'querystring';

import * as UserProviderTypes from '../constants/UserProviderType';
import { deleteSocialAccount, updateSocialAccounts } from '../actions/firebaseApiActions';
import * as twitterApi  from '../api/twitterApi';
import * as facebookApi  from '../api/facebookApi';
import * as instagramApi  from '../api/instagramApi';
import { getUserData, getSocialAccountsData } from '../reducers';
import * as PageTypes from '../constants/PageTypes';

class MyAccount extends Component {
    constructor(props) {
        super(props);

        const { history, query, updateSocialAccounts, userData } = this.props;

        const queryObject = qs.parse(query.substr(1));
        if(queryObject.oauth_token && queryObject.oauth_verifier){
            twitterApi.sendloginResponse(queryObject.oauth_token, queryObject.oauth_verifier).then(() =>{
                updateSocialAccounts(userData.uid);
            });
        }else if(queryObject.code){
            instagramApi.sendloginResponse(queryObject.code).then(() =>{
                updateSocialAccounts(userData.uid);
            });
        }

        history.replace(PageTypes.MY_ACCOUNT);
    };

    onFacebookButtonClick = event => {
        event.preventDefault();

        const { userData, updateSocialAccounts } = this.props;

        facebookApi.login().then((response) => {
            updateSocialAccounts(userData.uid);
        }).catch((e) => {
            console.log(e);
        });
    };


    onTwitterButtonClick = event => {
        event.preventDefault();

        twitterApi.login().then((response) => {
            console.log(response);
            window.location = response;
        }).catch((e) => {
            console.log(e);
        });
    };

    onInstagramButtonClick = event => {
        event.preventDefault();

        instagramApi.login();
    };

    onDeleteButtonClick = (event,socialAccountId) => {
        event.preventDefault();

        const { deleteSocialAccount, userData } = this.props;
        deleteSocialAccount(userData.uid, socialAccountId);
    };


    render() {
        const { userData, socialAccounts } = this.props;

        let socialAccountsList;

        if(socialAccounts){
            socialAccountsList = socialAccounts.map((socialAccount)=>{
                return <div key={socialAccount.id}>{
                            socialAccount.type
                            +' '+
                            socialAccount.id
                        }
                        <Button
                            bsStyle='danger'
                            onClick={(e)=> this.onDeleteButtonClick(e,socialAccount.id)}
                        >
                            Delete
                        </Button>
                    </div>
            });
        }


        return (
            <div style={{maxWidth:'400px'}}>
                <div>

                    <div>
                        Display Name : {userData.displayName}
                    </div>
                    <div>
                        User Id : {userData.uid}
                    </div>

                    {socialAccountsList}

                    <Button
                        bsSize="lg"
                        bsStyle="primary"
                        onClick={this.onFacebookButtonClick}
                    >
                        <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />&nbsp;
                        Add Facebook Account
                    </Button>

                    <Button
                        bsSize="lg"
                        bsStyle="info"
                        onClick={this.onTwitterButtonClick}
                    >
                        <Glyphicon glyph="glyphicon glyphicon-retweet" />&nbsp;
                        Add Twitter Account
                    </Button>

                    <Button
                        bsSize="lg"
                        bsStyle="danger"
                        onClick={this.onInstagramButtonClick}
                    >
                        <Glyphicon glyph="glyphicon glyphicon-retweet" />&nbsp;
                        Add Instagram Account
                    </Button>
                </div>
            </div>
        );
    }
};

const mapStateToProps =  (state, { location }) => ({
    query:location.search,
    userData:getUserData(state),
    socialAccounts:getSocialAccountsData(state),
});

const mapDispatchToProps = {
    updateSocialAccounts,
    deleteSocialAccount
};

MyAccount = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccount);

export default withRouter(MyAccount);