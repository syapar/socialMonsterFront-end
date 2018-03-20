import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/fakeApi';
import { getIsFetching, getSocialAccountsData } from '../reducers';
import * as ActionTypes from '../constants/ActionTypes';
import * as UserProviderTypes from '../constants/UserProviderType';
import * as facebookApi from '../api/facebookApi';
import * as twitterApi from '../api/twitterApi';
import * as instagramApi from '../api/instagramApi';
import * as FilterTypes from '../constants/FilterTypes';

export const fetchPosts = (filter) => (dispatch, getState) => {

    if(getIsFetching(getState(),filter)){
        return Promise.resolve();
    }

    let socialAccounts = getSocialAccountsData(getState());

    if(filter !== FilterTypes.ALL){
        socialAccounts = socialAccounts.filter(socialAccount => socialAccount.type === filter);
    }

    socialAccounts.forEach((socialAccount) => {
        dispatch({
            type:ActionTypes.FETCH_POSTS_REQUEST,
            filter,
        });

        const targetApi = socialAccount.type === UserProviderTypes.FACEBOOK ? facebookApi
            : socialAccount.type === UserProviderTypes.TWITTER ? twitterApi
                : instagramApi ;

        targetApi.fetchPosts(socialAccount).then((response)=>{
            dispatch({
                type:ActionTypes.FETCH_POSTS_SUCCESS,
                filter,
                response: normalize(response.data, schema.arrayOfPosts),
            });
        }).catch((e)=>{
            dispatch({
                type:ActionTypes.FETCH_POSTS_FAIL,
                filter,
                message: e.message || 'Something went wrong.',
            });
        });
    });

};

export const addPost = (text, title) => (dispatch) =>
    api.addPost(text, title).then((response) => {
        dispatch({
            type:ActionTypes.ADD_POST_SUCCESS,
            response: normalize(response, schema.posts),
        })
    });
