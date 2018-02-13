import { combineReducers } from 'redux';
import byId, * as fromById from './postById';
import createList, * as fromList from './createPostList';
import * as FilterTypes from '../constants/FilterTypes';

const listByFilter = combineReducers({
    all: createList(FilterTypes.ALL),
    facebook: createList(FilterTypes.FACEBOOK),
    twitter: createList(FilterTypes.TWITTER),
    instagram: createList(FilterTypes.INSTAGRAM),
});

const post = combineReducers({
    byId,
    listByFilter,
});

export default post;

export const getVisiblePosts = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getPost(state.byId, id));
};

export const getIsFetching = (state, filter) =>
    fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
    fromList.getErrorMessage(state.listByFilter[filter]);