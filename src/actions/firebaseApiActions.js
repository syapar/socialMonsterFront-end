import  firebase  from 'firebase';
import 'firebase/firestore';
import * as ActionTypes from '../constants/ActionTypes';
import * as UserProviderTypes from '../constants/UserProviderType';

export const addSocialAccount = (uid,providerType,response) => (dispatch) => {
    let accessToken,expires,socialAccountId;

    switch (providerType){
        case UserProviderTypes.FACEBOOK:
            //faceapi
            accessToken = response.accessToken;
            expires = response.expiresIn;
            socialAccountId = response.userID;
            //response.signedRequest
            break;
        case UserProviderTypes.TWITTER:
            //twitterapi
            break;
    }


    let socialAccount =  firebase.firestore().doc(`users/${uid}/socialAccounts/${socialAccountId}`);
    socialAccount.set({
        id:socialAccountId,
        type: providerType,
        accessToken,
        expires,
    }).then(function() {
        console.log("Document successfully written!");
        dispatch(updateSocialAccounts(uid));
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

export const deleteSocialAccount = (uid,socialAccountId) => (dispatch) => {

    let socialAccount =  firebase.firestore().doc(`users/${uid}/socialAccounts/${socialAccountId}`);
    socialAccount.delete().then(function() {
        console.log("Document deleted successfully ");
        dispatch(updateSocialAccounts(uid));
    }).catch(function(error) {
        console.error("Error deleting document: ", error);
    });

};

export const updateSocialAccounts = (uid) => (dispatch) => {
    return firebase.firestore().collection(`users/${uid}/socialAccounts`).get().then((querySnapshot) => {
        const socialAccountsArray = [];
        querySnapshot.forEach((doc)=>{
            socialAccountsArray.push(doc.data());
        });
        dispatch({
            type:ActionTypes.SOCIAL_ACCOUNTS_UPDATE_SUCCESS,
            response: socialAccountsArray,
        });
        // dispatch(fetchPosts(FilterTypes.ALL));
    }).catch(function(error) {
        console.error("social Accounts not found", error);
        dispatch({
            type:ActionTypes.SOCIAL_ACCOUNTS_UPDATE_FAIL,
        })
    });
};

