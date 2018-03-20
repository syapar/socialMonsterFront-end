import * as ActionTypes from '../constants/ActionTypes';
import * as facebookApi from '../api/facebookApi';
import * as twitterApi from '../api/twitterApi';

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
