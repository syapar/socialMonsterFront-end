import * as ActionTypes from '../constants/ActionTypes';
import * as UserProviderTypes from '../constants/UserProviderType';
import * as facebookApi from '../api/facebookApi';
import * as twitterApi from '../api/twitterApi';
import { getUserData}  from '../reducers';
import { addSocialAccount } from './firebaseApiActions';

export const initSocialApis = () => (dispatch) => {
    facebookApi.init().then(()=>{
        dispatch({
            type: ActionTypes.SERVICE_FACEBOOK_LOAD_SUCCESS,
        });
    });

    twitterApi.init().then(()=>{
        dispatch({
            type: ActionTypes.SERVICE_TWITTER_LOAD_SUCCESS,
        });
    });
};


// export const loginSocialApis = (providerType,history) => (dispatch,getState) => {
//     if(providerType===UserProviderTypes.FACEBOOK){
//         facebookApi.login().then((response)=>{
//             dispatch(addSocialAccount(getUserData(getState()).uid,UserProviderTypes.FACEBOOK,response));
//         }).catch((e)=>{
//             console.log(e.message);
//         });
//     };
//     if(providerType===UserProviderTypes.TWITTER){
//         twitterApi.login().then((response)=>{
//             if(response.errorCode===200){
//                 // history.push(response);
//                 // twitterApi.fetchPosts();
//             }
//             // dispatch(addSocialAccount(getUserData(getState()).uid,UserProviderTypes.TWITTER,response));
//         }).catch((e)=>{
//             console.log(e.message);
//         });
//     };
// };
