import { combineReducers } from 'redux';

import * as ACTIONS from "../constants/ActionTypes";

const data = (state = [], action) => {
    switch (action.type){
        case ACTIONS.SOCIAL_ACCOUNTS_UPDATE_SUCCESS:
            return action.response;
        case ACTIONS.SOCIAL_ACCOUNTS_UPDATE_FAIL:
            return [];
        default:
            return state;
    }
};

const isSocialAccountsLoaded = (state = false, action) => {
    switch (action.type){
        case ACTIONS.SOCIAL_ACCOUNTS_UPDATE_SUCCESS:
            return true;
        case ACTIONS.SOCIAL_ACCOUNTS_UPDATE_FAIL:
            return false;
        default:
            return state;
    }
};


const socialAccounts = combineReducers({
    data,
    isSocialAccountsLoaded,
});



export default socialAccounts;

export const getSocialAccountsData = (state) =>
    state.data;

export const getIsSocialAccountsLoaded = (state) =>
    state.isSocialAccountsLoaded;