import React from 'react';
import PageLink from '../components/PageLink';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as PageTypes from '../constants/PageTypes';
import { signOut } from '../actions/userActions';

let Header = ({  signOut }) => {

    return(
        <div>
            <PageLink page={PageTypes.HOME}>
                - HOME
            </PageLink>
            <PageLink page={PageTypes.MY_ACCOUNT}>
                - MY ACCOUNT
            </PageLink>
            <Button
                id='signOutButton'
                bsSize='sm'
                bsStyle='danger'
                onClick={()=>{signOut()}}
            >
                Sign Out
            </Button>
        </div>
    );
};


export const ConnectedHeader = connect(
    null,
    {
        signOut
    }
)(Header);

export default withRouter(ConnectedHeader);
