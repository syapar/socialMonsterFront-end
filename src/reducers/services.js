import { combineReducers } from 'redux';

import * as ACTIONS from "../constants/ActionTypes";

const isFacebookReady = (state = false, action) => {
    switch (action.type){
        case ACTIONS.SERVICE_FACEBOOK_LOAD_SUCCESS:
            return true;
        case ACTIONS.SERVICE_FACEBOOK_LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const isTwitterReady = (state = true, action) => {
    switch (action.type){
        case ACTIONS.SERVICE_TWITTER_LOAD_SUCCESS:
            return true;
        case ACTIONS.SERVICE_TWITTER_LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const services = combineReducers({
    isFacebookReady,
    isTwitterReady
});

export default services;

export const getIsFacebookReady = (state) =>
    state.isFacebookReady;

export const getIsTwitterReady = (state) =>
    state.isTwitterReady;