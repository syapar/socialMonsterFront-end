import { combineReducers } from 'redux';
import * as ActionTypes from './../constants/ActionTypes';
import * as FilterTypes from './../constants/FilterTypes';

const createList = (filter) => {
    const ids = (state = [], action) => {
        switch  (action.type){
            case ActionTypes.FETCH_POSTS_SUCCESS:
                return filter === action.filter ?
                    [...new Set([...state ,...action.response.result])] :
                    state;
            case ActionTypes.ADD_POST_SUCCESS:
                return [...state, action.response.result];
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if(action.filter !== filter){
            return state;
        }

        switch (action.type){
            case ActionTypes.FETCH_POSTS_REQUEST:
                return true;
            case ActionTypes.FETCH_POSTS_SUCCESS:
            case ActionTypes.FETCH_POSTS_FAIL:
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        if(action.filter !== filter){
            return state;
        }

        switch (action.type){
            case ActionTypes.FETCH_POSTS_FAIL:
                return action.message;
            case ActionTypes.FETCH_POSTS_SUCCESS:
            case ActionTypes.FETCH_POSTS_REQUEST:
                return null;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
};

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

export const getErrorMessage = (state) => state.errorMessage;
