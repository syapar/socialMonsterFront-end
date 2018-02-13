import { normalize } from 'normalizr';

import * as schema from './schema';
import * as ActionTypes from '../constants/ActionTypes';
import { updateSocialAccounts } from './firebaseApiActions';
import * as firebaseApi from '../api/firebaseApi';

export const signIn = (providerType) => (dispatch) => {
    dispatch({
        type:ActionTypes.SIGN_IN_REQUEST,
    });

    return firebaseApi.signIn(providerType).then(function(response) {
         console.log("user signed in with Popup");
        dispatch(updateSocialAccounts(response.user.uid)).then(() =>{
            dispatch({
                type:ActionTypes.SIGN_IN_SUCCESS,
                response: normalize(response.user, schema.user),
            });
        });

    }).catch(function(error) {
        dispatch({
            type:ActionTypes.SIGN_IN_FAIL,
            message: error.message || 'Something went wrong.',
        });
    });
};

export const signOut = () => (dispatch) => {
    dispatch({
        type:ActionTypes.SIGN_OUT_REQUEST,
    });

    return firebaseApi.signOut().then(function(response) {
        //console.log('user signed out');
        dispatch({
            type:ActionTypes.SIGN_OUT_SUCCESS,
        });
    }).catch(function(error) {
        dispatch({
            type:ActionTypes.SIGN_OUT_FAIL,
            message: error.message || 'Signed Out Failed.',
        })
    });
};


export const checkUserState = () => (dispatch) => {
    dispatch({
        type:ActionTypes.SIGN_IN_REQUEST,
    });


    firebaseApi.onAuthStateChanged().then((response) => {
        if(response){
            dispatch(updateSocialAccounts(response.uid)).then(() =>{
                dispatch({
                    type:ActionTypes.SIGN_IN_SUCCESS,
                    response: normalize(response, schema.user),
                });
            });
        }else{
            dispatch({
                type:ActionTypes.SIGN_OUT_SUCCESS,
            });
        }
    }).catch((e)=>{
        console.log("Error on firebase auth :", e.message);
    });
};