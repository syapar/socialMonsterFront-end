import { combineReducers } from 'redux';

import user, * as fromUser from './user';
import post, * as fromPost from './post';
import socialAccounts, * as fromSocialAccounts from './socialAccounts';
import services, * as fromServices from './services';


const app = combineReducers({
    user,
    post,
    socialAccounts,
    services,
});


export default app;

export const getVisiblePosts = (state, filter) =>
    fromPost.getVisiblePosts(state.post, filter)

export const getIsFetching = (state, filter) =>
    fromPost.getIsFetching(state.post, filter)

export const getErrorMessage = (state, filter) =>
    fromPost.getErrorMessage(state.post, filter)

export const getUserData = (state) =>
    fromUser.getUserData(state.user)

export const getIsSignedIn = (state) =>
    fromUser.getIsSignedIn(state.user)

export const getIsSignedInRequested = (state) =>
    fromUser.getIsSignedInRequested(state.user);

export const getSocialAccountsData = (state) =>
    fromSocialAccounts.getSocialAccountsData(state.socialAccounts);

export const getIsSocialAccountsLoaded = (state) =>
    fromSocialAccounts.getIsSocialAccountsLoaded(state.socialAccounts);

export const getIsFacebookReady = (state) =>
    fromServices.getIsFacebookReady(state.services);

export const getIsTwitterReady = (state) =>
    fromServices.getIsTwitterReady(state.services);