import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { register } from '../actions/registerActions';
import { getUserData, getIsSignedIn } from '../reducers';

class RegisterFrom extends Component{

    onSendClicked(){
        const { register } = this.props;

        register('12345');//.then(() => console.log('registered'));
    }

    render (){
        // return(
        //     <div>aaaaaa</div>
        // );


        const { userData, isSignedIn } = this.props;

        if(isSignedIn){
            return(
                <div>
                    {userData.name}
                </div>
            );
        }else{
            return(
                <div>
                    <Button
                        bsStyle='danger'
                        onClick={() => this.onSendClicked()}
                    >
                        SEND
                    </Button>
                </div>
            );
        }
    }
}

const mapStateToProp = (state) => ({
    userData:getUserData(state),
    isSignedIn:getIsSignedIn(state),
});

RegisterFrom = connect(
    mapStateToProp,
    {
        register,
    }
)(RegisterFrom);

export default RegisterFrom;