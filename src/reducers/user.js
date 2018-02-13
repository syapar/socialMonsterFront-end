import * as ACTIONS from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const data = (state = {}, action) => {
    switch (action.type){
        case ACTIONS.REGISTER_SUCCESS:
        case ACTIONS.SIGN_IN_SUCCESS:
            return {
                ...state,
                ...action.response.entities.users[action.response.result],
            };
        case ACTIONS.SIGN_OUT_SUCCESS:
            return {};
        default:
            return state;
    }
};

const isSignedIn = (state = false, action) => {
    switch (action.type){
        case ACTIONS.REGISTER_SUCCESS:
        case ACTIONS.SIGN_IN_SUCCESS:
            return true;
        case ACTIONS.SIGN_OUT_SUCCESS:
            return false;
        default:
            return state;
    }
};

const isSignedInRequested = (state = false, action) => {
    switch (action.type){
        case ACTIONS.REGISTER_SUCCESS:
        case ACTIONS.SIGN_IN_SUCCESS:
        case ACTIONS.SIGN_OUT_SUCCESS:
        case ACTIONS.REGISTER_FAIL:
        case ACTIONS.SIGN_IN_FAIL:
        case ACTIONS.SIGN_OUT_FAIL:
            return false;
        case ACTIONS.REGISTER_REQUEST:
        case ACTIONS.SIGN_IN_REQUEST:
        case ACTIONS.SIGN_OUT_REQUEST:
            return true;
        default:
            return state;
    }
};

const user = combineReducers(
    {
        data,
        isSignedIn,
        isSignedInRequested,
    }
);

export default user;

export const getUserData = (state) =>
    state.data;

export const getIsSignedIn = (state) =>
    state.isSignedIn;

export const getIsSignedInRequested = (state) =>
    state.isSignedInRequested;